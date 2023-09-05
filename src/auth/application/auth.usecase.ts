import { SECRET } from '../../config/defaults';
import { ForbiddenError } from '../../exceptions/forbidden.error';
import { NotFoundError } from '../../exceptions/notfound.error';
import { UnauthorizedError } from '../../exceptions/unauthorized.error';
import { AuthRepository } from '../domain/auth.repository';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AuthUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  public async login(username: string, password: string) {
    const userFound = await this.authRepository.login(username);

    if (!userFound) {
      throw new UnauthorizedError('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, userFound.password!);
    if (!isMatch) {
      throw new UnauthorizedError('Invalid credentials');
    }

    const token = jwt.sign(
      {
        time: Date(),
        userId: userFound.id,
      },
      SECRET as string,
      { expiresIn: '60s' },
    );

    const refreshToken = jwt.sign(
      {
        time: Date(),
        userId: userFound.id,
      },
      SECRET as string,
      { expiresIn: '1d' },
    );

    return {
      userInfo: { ...userFound },
      token,
      refreshToken,
    };
  }

  public async refresh(refreshToken?: string) {
    if (!refreshToken) {
      throw new UnauthorizedError('Unauthorized');
    }

    const accessToken = jwt.verify(
      refreshToken,
      SECRET as string,
      async (err, decoded) => {
        if (err) {
          throw new ForbiddenError('Forbidden');
        }

        const userId = (decoded as { userId: number }).userId;
        const foundUser = await this.authRepository.foundUser(userId);

        if (!foundUser) {
          throw new UnauthorizedError('Unauthorized');
        }

        const token = jwt.sign(
          {
            time: Date(),
            userId,
          },
          SECRET as string,
          { expiresIn: '60s' },
        );

        return token;
      },
    );

    return accessToken;
  }

  public async logOut(refreshToken?: string) {
    if (!refreshToken) {
      throw new NotFoundError('No content');
    }

    return refreshToken;
  }
}

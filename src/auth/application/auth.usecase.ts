import { SECRET } from '../../config/defaults';
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
    );

    return {
      ...userFound,
      token,
    };
  }
}

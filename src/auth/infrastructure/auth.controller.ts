import { Request, Response } from 'express';
import { AuthUseCase } from '../application/auth.usecase';
import { HttpResponse, HttpStatus } from '../../response/response.http';
import { BaseError } from '../../exceptions/base.error';

export class AuthController {
  constructor(private authUseCase: AuthUseCase) {}

  login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const { userInfo, token, refreshToken } = await this.authUseCase.login(
        username,
        password,
      );

      res.cookie('jwt', refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      HttpResponse.Ok(res, { userInfo, token });
    } catch (err: unknown) {
      if (err instanceof BaseError) {
        return HttpResponse.Ko(res, err.message, err.httpCode);
      }
      return HttpResponse.Ko(
        res,
        'Internal Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };

  refresh = async (req: Request, res: Response) => {
    try {
      const { jwt } = req.cookies;
      const accessToken = await this.authUseCase.refresh(jwt);
      res.json(accessToken);
      
    } catch (err: unknown) {
      if (err instanceof BaseError) {
        return HttpResponse.Ko(res, err.message, err.httpCode);
      }
      return HttpResponse.Ko(
        res,
        'Internal Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };
}

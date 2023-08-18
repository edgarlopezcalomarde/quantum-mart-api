import { Request, Response } from 'express';
import { AuthUseCase } from '../application/auth.usecase';
import { HttpResponse, HttpStatus } from '../../response/response.http';
import { BaseError } from '../../exceptions/base.error';

export class AuthController {
  constructor(private authUseCase: AuthUseCase) {}

  login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const authOpetation = await this.authUseCase.login(username, password);

      HttpResponse.Ok(res, authOpetation);
    } catch (err: unknown) {
      if (err instanceof BaseError) {
        HttpResponse.Ko(res, err.message, err.httpCode);
      }
      HttpResponse.Ko(res, 'Internal Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };
}

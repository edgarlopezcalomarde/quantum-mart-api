import { Request, Response } from 'express';
import { AuthUseCase } from '../application/auth.usecase';
import { HttpResponse } from '../../response/response.http';

export class AuthController {
  constructor(private authUseCase: AuthUseCase) {}

  login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const authOpetation = await this.authUseCase.login(username, password);

      HttpResponse.Ok(res, authOpetation);
    } catch (err) {
      HttpResponse.Unauthorized(res);
    }
  };
}

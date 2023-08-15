import { Request, Response } from 'express';
import { AuthUseCase } from '../application/auth.usecase';

class AuthController {
  constructor(private AuthUseCase: AuthUseCase) {}

  login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
  };
}

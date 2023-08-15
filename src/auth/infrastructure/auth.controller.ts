import { Request, Response } from 'express';
import { AuthUseCase } from '../application/auth.usecase';

export class AuthController {
  constructor(private authUseCase: AuthUseCase) {}

  login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const authOpetation = await this.authUseCase.login(username, password);
      res.json(authOpetation);
    } catch (err) {
      const { message } = err as { message: string };
      res.status(401).json({ message });
    }
  };
}

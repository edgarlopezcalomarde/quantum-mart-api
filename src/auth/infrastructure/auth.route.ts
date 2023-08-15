import { Router } from 'express';
import { AuthUseCase } from '../application/auth.usecase';
import { AuthController } from './auth.controller';
import { MYSQLRepository } from './repository/mysql.repository';

const router = Router();

const authRepository = new MYSQLRepository();
const authUseCase = new AuthUseCase(authRepository);
const authController = new AuthController(authUseCase);

router.post('/auth/login', authController.login);

export default router;

import { Router } from 'express';
import { AuthUseCase } from '../application/auth.usecase';
import { AuthController } from './auth.controller';
import { MYSQLRepository } from './repository/mysql.repository';
import { loginLimiter } from './auth.limiter';

const router = Router();

const authRepository = new MYSQLRepository();
const authUseCase = new AuthUseCase(authRepository);
const authController = new AuthController(authUseCase);

router.post('/auth/login', loginLimiter, authController.login);
router.post('/auth/refresh', authController.refresh);
router.post('/auth/logout', authController.logOut);

export default router;

import { Router } from 'express';
import { UserUseCase } from '../application/user.usecase';
import { UserController } from './user.controller';
import { MYSQLRepository } from './repository/mysql.repository';

const router = Router();

const userRepo = new MYSQLRepository();
const useCase = new UserUseCase(userRepo);
const userController = new UserController(useCase);

router.get('/users', userController.getAllUsers);
router.post('/users', userController.newUser);
router.get('/users/:id', userController.getUserById);
router.patch('/users/:id', userController.patchUser);
router.delete('/users/:id', userController.deleteUser);

export default router;

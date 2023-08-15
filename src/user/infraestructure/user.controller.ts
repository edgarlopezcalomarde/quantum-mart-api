import { Request, Response } from 'express';
import { UserUseCase } from '../application/user.usecase';

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.getAllUsers = this.getAllUsers.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  async getAllUsers(req: Request, res: Response) {
    const users = await this.userUseCase.listOfUsers();
    res.json(users);
  }

  async newUser(req: Request, res: Response) {
    const insertedUser = await this.userUseCase.registerUser(req.body);

    res.json(insertedUser);
  }

  getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.userUseCase.findUserById(id);
    res.json(user);
  };

  patchUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userUpdated = await this.userUseCase.patchUser(id, req.body);
    res.json(userUpdated);
  };

  deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userDeleted = await this.userUseCase.deleteUser(id);
    res.json(userDeleted);
  };
}

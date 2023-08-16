import { Request, Response } from 'express';
import { UserUseCase } from '../application/user.usecase';
import { HttpResponse } from '../../response/response.http';

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.getAllUsers = this.getAllUsers.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  async getAllUsers(req: Request, res: Response) {
    const users = await this.userUseCase.listOfUsers();
    HttpResponse.Ok(res, users);
  }

  async newUser(req: Request, res: Response) {
    const insertedUser = await this.userUseCase.registerUser(req.body);
    HttpResponse.Ok(res, insertedUser);
  }

  getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.userUseCase.findUserById(id);
    HttpResponse.Ok(res, user);
  };

  patchUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userUpdated = await this.userUseCase.patchUser(id, req.body);
    HttpResponse.Ok(res, userUpdated);
  };

  deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userDeleted = await this.userUseCase.deleteUser(id);
    HttpResponse.Ok(res, userDeleted);
  };
}

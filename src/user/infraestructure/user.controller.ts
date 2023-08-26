import { Request, Response } from 'express';
import { UserUseCase } from '../application/user.usecase';
import { HttpResponse, HttpStatus } from '../../response/response.http';
import { BaseError } from '../../exceptions/base.error';
import { ValiError, parse } from 'valibot';
import { newUserSchema, patchUserSchema } from './user.schema';

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.getAllUsers = this.getAllUsers.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userUseCase.listOfUsers();
      HttpResponse.Ok(res, users);
    } catch (err: unknown) {
      if (err instanceof BaseError) {
        HttpResponse.Ko(res, err.message, err.httpCode);
      }
      HttpResponse.Ko(res, 'Internal Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async newUser(req: Request, res: Response) {
    try {
      const body = parse(newUserSchema, req.body);

      const insertedUser = await this.userUseCase.registerUser(body);
      HttpResponse.Ok(res, insertedUser);
    } catch (err: unknown) {
      if (err instanceof ValiError) {
        return HttpResponse.Ko(res, err.message, HttpStatus.WRONG);
      }

      if (err instanceof BaseError) {
        return HttpResponse.Ko(res, err.message, err.httpCode);
      }

      return HttpResponse.Ko(
        res,
        'Internal Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  getUserById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await this.userUseCase.findUserById(id);
      HttpResponse.Ok(res, user);
    } catch (err: unknown) {
      if (err instanceof BaseError) {
        HttpResponse.Ko(res, err.message, err.httpCode);
      }
      HttpResponse.Ko(res, 'Internal Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  patchUser = async (req: Request, res: Response) => {
    try {
      const body = parse(patchUserSchema, req.body);
      const { id } = req.params;
      const userUpdated = await this.userUseCase.patchUser(id, body);
      HttpResponse.Ok(res, userUpdated);
    } catch (err: unknown) {
      if (err instanceof ValiError) {
        return HttpResponse.Ko(res, err.message, HttpStatus.WRONG);
      }

      if (err instanceof BaseError) {
        HttpResponse.Ko(res, err.message, err.httpCode);
      }
      HttpResponse.Ko(res, 'Internal Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const userDeleted = await this.userUseCase.deleteUser(id);
      HttpResponse.Ok(res, userDeleted);
    } catch (err: unknown) {
      if (err instanceof BaseError) {
        HttpResponse.Ko(res, err.message, err.httpCode);
      }
      HttpResponse.Ko(res, 'Internal Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };
}

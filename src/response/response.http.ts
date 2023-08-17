import { Response } from 'express';
import { HttpStatus } from '../types';

export class HttpResponse {
  static Ok(res: Response, data: any) {
    res.status(HttpStatus.OK).json({
      data,
      status: HttpStatus.OK,
      message: 'Ok',
    });
  }

  static Ko(res: Response, message: string, status: HttpStatus) {
    res.status(status).json({
      status: status,
      message: message,
      data: {},
    });
  }
}

import { Response } from 'express';

export enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  UNAUTHORIZED = 401,
  WRONG = 400,
  INTERNAL_SERVER_ERROR = 500,
}

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

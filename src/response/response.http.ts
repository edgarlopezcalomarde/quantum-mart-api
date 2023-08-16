import { Response } from 'express';

export enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  UNAUTHORIZED = 401,
  INTERNAL_SERVER_ERROR = 500,
}

export class HttpResponse {
  static Ok(res: Response, data?: any) {
    res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Ok',
      data,
    });
  }

  static Forbidden(res: Response, data?: any) {
    res.status(HttpStatus.FORBIDDEN).json({
      status: HttpStatus.FORBIDDEN,
      message: 'Forbidden Access',
      data,
    });
  }

  static NotFound(res: Response, data?: any) {
    res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      message: 'Not Found',
      data,
    });
  }

  static Unauthorized(res: Response, data?: any) {
    res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      message: 'Unauthorized',
      data,
    });
  }

  static InternalError(res: Response, data?: any) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal Server Error',
      data,
    });
  }
}

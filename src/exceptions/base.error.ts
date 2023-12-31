import { HttpStatus } from '../response/response.http';

export class BaseError extends Error {
  public readonly message: string;
  public readonly httpCode: HttpStatus;

  constructor(message: string, httpCode: HttpStatus) {
    super();
    this.message = message;
    this.httpCode = httpCode;
  }
}

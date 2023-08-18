import { HttpStatus } from '../response/response.http';
import { BaseError } from './base.error';

export class UnauthorizedError extends BaseError {
  constructor(message: string) {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}

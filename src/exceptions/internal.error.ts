import { HttpStatus } from '../response/response.http';
import { BaseError } from './base.error';

export class InternalError extends BaseError {
  constructor(message: string) {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

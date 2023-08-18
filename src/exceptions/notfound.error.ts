import { HttpStatus } from '../response/response.http';
import { BaseError } from './base.error';

export class NotFoundError extends BaseError {
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND);
  }
}

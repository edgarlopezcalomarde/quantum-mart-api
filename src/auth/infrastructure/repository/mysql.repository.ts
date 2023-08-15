import { AuthEntity } from '../../domain/auth.entity';
import { AuthRepository } from '../../domain/auth.repository';

export class MYSQLRepository implements AuthRepository {
  login(username: string, password: string): Promise<AuthEntity | null> {
    throw new Error('Method not implemented.');
  }
}

import { AuthEntity } from './auth.entity';

export interface AuthRepository {
  login(username: string, password: string): Promise<AuthEntity | null>;
}

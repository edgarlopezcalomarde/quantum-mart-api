import { UserEntity } from '../../user/domain/user.entity';

export interface AuthRepository {
  login(username: string): Promise<UserEntity | null>;
  foundUser(id: number): Promise<UserEntity | null>;
}

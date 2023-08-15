import { Repository } from '../../types';
import { UserEntity } from './user.entity';

export interface UserRepository {
  findUserById(id: string): Promise<UserEntity | null>;
  registerUser(user: UserEntity): Promise<UserEntity | null>;
  listOfUsers(): Promise<UserEntity[] | null>;
  patchUser(id: string, user: UserEntity): Promise<UserEntity | null>;
  deleteUser(id: string): Promise<UserEntity | null>;
}

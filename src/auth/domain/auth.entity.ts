import { UserEntity } from '../../user/domain/user.entity';

export interface AuthEntity {
  user: UserEntity;
  token: string;
}

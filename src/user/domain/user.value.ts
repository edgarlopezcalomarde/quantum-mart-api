import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';

export class UserValue implements UserEntity {
  id: string;
  email: string;
  username: string;
  password: string;
  rol_id: number;

  constructor({
    username,
    email,
    password,
    rol_id,
  }: {
    username: string;
    email: string;
    password: string;
    rol_id: number;
  }) {
    this.id = uuid();
    this.username = username;
    this.email = email;
    this.password = password;
    this.rol_id = rol_id;
  }
}

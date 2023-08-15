import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';

let MockUsers: Array<UserEntity> = [
  {
    username: 'Paco',
    email: 'paco@example.com',
    password: '1234567890',
    id: '1',
    rol_id: 1,
  },
  {
    username: 'Pedro',
    email: 'pedro@example.com',
    password: '1234567890',
    id: '2',
    rol_id: 1,
  },
  {
    username: 'Pepe',
    email: 'pepe@example.com',
    password: '1234567890',
    id: '3',
    rol_id: 2,
  },
];

export class MockRepository implements UserRepository {
  async deleteUser(id: string): Promise<null> {
    const user = MockUsers.filter((u) => u.id === id)[0];
    MockUsers = MockUsers.filter((u) => u.id !== user.id);
    return null;
  }

  async findUserById(id: string): Promise<UserEntity | null> {
    const usersOmitPassword = MockUsers.map((u) => {
      return {
        username: u.username,
        email: u.email,
        id: u.id,
        rol_id: u.rol_id,
      };
    });

    return usersOmitPassword.filter((u) => u.id === id)[0];
  }

  async registerUser(user: UserEntity): Promise<UserEntity | null> {
    MockUsers.push(user);
    return user;
  }

  async patchUser(id: string, user: UserEntity): Promise<UserEntity | null> {
    const index = MockUsers.findIndex((user) => user.id === id);

    const userFound = MockUsers[index];
    if (index != -1) {
      userFound.username = user.username;
      userFound.email = user.email;
      userFound.rol_id = user.rol_id;
      userFound.password = user.password;
    }

    return userFound;
  }

  async listOfUsers(): Promise<UserEntity[] | null> {
    const usersOmitPassword = MockUsers.map((u) => {
      return {
        username: u.username,
        email: u.email,
        id: u.id,
        rol_id: u.rol_id,
      };
    });

    return usersOmitPassword;
  }
}

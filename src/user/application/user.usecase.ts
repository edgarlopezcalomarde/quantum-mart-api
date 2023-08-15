import { UserRepository } from '../domain/user.repository';
import { UserValue } from '../domain/user.value';
import bcrypt from 'bcryptjs';

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async registerUser({
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
    const passwordHash = await bcrypt.hash(password, 10);

    const userValue = new UserValue({
      username,
      email,
      password: passwordHash,
      rol_id,
    });
    const userCreated = await this.userRepository.registerUser(userValue);
    return userCreated;
  }

  public async patchUser(
    id: string,
    {
      username,
      email,
      password,
      rol_id,
    }: {
      username: string;
      email: string;
      password: string;
      rol_id: number;
    },
  ) {
    const passwordHash = await bcrypt.hash(password, 10);

    const userValue = new UserValue({
      username,
      email,
      password: passwordHash,
      rol_id,
    });
    const userPatch = await this.userRepository.patchUser(id, userValue);
    return userPatch;
  }

  public async listOfUsers() {
    const users = await this.userRepository.listOfUsers();
    return users;
  }

  public async deleteUser(id: string) {
    const user = await this.userRepository.findUserById(id);
    if (user != null) await this.userRepository.deleteUser(user.id);

    return user;
  }

  public async findUserById(id: string) {
    const user = await this.userRepository.findUserById(id);
    return user;
  }
}

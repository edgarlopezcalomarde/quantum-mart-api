import { User } from '../../domain/user/user-entity';
import { UserRepository } from '../../domain/user/user-repository';
import { UserDTO } from './user-dto';

export class UserCreate {
  constructor(private readonly userRepository: UserRepository) {}

  async run(userDTO: UserDTO): Promise<void> {
    const user = new User(userDTO.id, userDTO.username);
    await this.userRepository.save(user);
  }
}

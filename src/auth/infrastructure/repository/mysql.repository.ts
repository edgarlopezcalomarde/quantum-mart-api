import { pool } from '../../../config/db.mysql';
import { UserEntity } from '../../../user/domain/user.entity';
import { AuthRepository } from '../../domain/auth.repository';

export class MYSQLRepository implements AuthRepository {
  async foundUser(id: number): Promise<UserEntity | null> {
    const [result] = await pool.query(
      'SELECT * FROM users where id = ? LIMIT 1',
      [id],
    );

    const res = result as Array<UserEntity>;
    if (res.length < 1) {
      return null;
    }

    return res[0];
  }
  async login(username: string): Promise<UserEntity | null> {
    const [result] = await pool.query(
      'SELECT * FROM users WHERE username = ? LIMIT 1',
      [username],
    );

    const res = result as Array<UserEntity>;

    if (res.length < 1) {
      return null;
    }

    return res[0];
  }
}

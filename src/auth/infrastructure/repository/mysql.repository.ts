import { pool } from '../../../config/db.mysql';
import { InternalError } from '../../../exceptions/internal.error';
import { UserEntity } from '../../../user/domain/user.entity';
import { AuthRepository } from '../../domain/auth.repository';

export class MYSQLRepository implements AuthRepository {
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

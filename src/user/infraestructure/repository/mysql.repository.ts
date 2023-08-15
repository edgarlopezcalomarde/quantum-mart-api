import { pool } from '../../../config/db.mysql';
import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';

export class MYSQLRepository implements UserRepository {
  async findUserById(id: string): Promise<UserEntity | null> {
    const [res] = await pool.query('SELECT * FROM users WHERE id = ? LIMIT 1', [
      id,
    ]);
    const userFound = (res as Array<UserEntity>)[0];
    return userFound;
  }

  async registerUser(user: UserEntity): Promise<UserEntity | null> {
    const { email, rol_id, username, password } = user;
    const [res] = await pool.query(
      'INSERT INTO users(username, password, email, rol_id) VALUES(?, ?, ?,?)',
      [username, password, email, rol_id],
    );

    const { insertId } = res as { insertId: number };

    const [users] = await pool.query(
      'SELECT * FROM users WHERE id = ? LIMIT 1',
      [insertId],
    );
    const userFound = (users as Array<UserEntity>)[0];
    return userFound;
  }

  async listOfUsers(): Promise<UserEntity[] | null> {
    const [res] = await pool.query('SELECT * FROM users');
    return res as Array<UserEntity>;
  }
  async patchUser(id: string, user: UserEntity): Promise<UserEntity | null> {
    const { email, rol_id, username, password } = user;

    const [res] = await pool.query(
      'UPDATE users SET username = IFNULL(?,username), password = IFNULL(?,password), email = IFNULL(?,email), rol_id = IFNULL(?,rol_id) WHERE id = ?',
      [username, password, email, rol_id, id],
    );

    const [users] = await pool.query(
      'SELECT * FROM users WHERE id = ? LIMIT 1',
      [id],
    );
    const userUpdated = (users as Array<UserEntity>)[0];
    return userUpdated;
  }
  async deleteUser(id: string): Promise<null> {
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
    return null;
  }
}

import { createConnection, createPool } from 'mysql2/promise';
import { DBHOST, DBNAME, DBPASS, DBPORT, DBUSER } from './defaults';
import { readFile } from 'fs/promises';

export const pool = createPool({
  host: DBHOST,
  user: DBUSER,
  password: DBPASS,
  port: Number(DBPORT),
  database: DBNAME,
});

const connection = createConnection({
  host: DBHOST,
  user: DBUSER,
  password: DBPASS,
  multipleStatements: true,
});

export async function initDB() {
  try {
    const sql = await readFile('db/db.sql', 'utf8');
    await (await connection).query(sql);
  } catch (error) {
    console.error('Error al ejecutar las consultas:', error);
  } finally {
    (await connection).end();
  }
}

import { createPool } from 'mysql2/promise';
import { DBHOST, DBNAME, DBPASS, DBPORT, DBUSER } from './defaults';

export const pool = createPool({
  host: DBHOST,
  user: DBUSER,
  password: DBPASS,
  port: Number(DBPORT),
  database: DBNAME,
});

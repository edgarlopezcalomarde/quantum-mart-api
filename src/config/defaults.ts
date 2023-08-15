import dotenv from 'dotenv';

dotenv.config();

export const DBPORT = process.env.DB_PORT || 3306;
export const DBPASS = process.env.DB_PASS;
export const DBHOST = process.env.DB_HOST;
export const DBNAME = process.env.DB_NAME;
export const DBUSER = process.env.DB_USER;

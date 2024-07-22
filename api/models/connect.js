import pkg from 'pg';
import { config } from "dotenv";
config();
const a = 'hello';
a.toLowerCase();
const { Pool } = pkg;
const pg = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    port: process.env.POSTGRES_PORT,
    password: process.env.POSTGRES_PASSWORD
});

export default function query(text, data){
    return pg.query(text, data);
}
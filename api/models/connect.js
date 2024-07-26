import pkg from 'pg';
import { config } from "dotenv";
config();

const { Pool } = pkg;
const pg = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Store',
    port: 5432,
    password: '0403'
});

export default function query(text, data){
    return pg.query(text, data);
}
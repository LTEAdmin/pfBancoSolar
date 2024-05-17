import pg from 'pg';
import 'dotenv/config';

const {DB_PASSWORD, DB_USER, DB_HOST, DB_DATABASE, DB_PORT} = process.env;

const config = {
    user: DB_USER,
    host: DB_HOST,
    database: DB_DATABASE,
    password: DB_PASSWORD,
    port: DB_PORT,
    allowExitOnIdle:true,
};

const dbase = new pg.Pool (config);
const getDate = async () => {
    const query = {
        text: 'SELECT now()'
    };
    const response = await dbase.query(query);
    console.log(response.rows)
};

getDate();// la funcion getDate es la funcion uqe hemos creado que se debe invocar

export default dbase
import dbase from "../config/db.js";

export async function agregarUsuarioBD (datos) { 
    try {
        const sql = {
            text: 'INSERT INTO usuarios (nombre, balance) VALUES($1, $2) RETURNING *',  
            values: datos,
        }
        const response = await dbase.query(sql);
        console.log(response.rows[0]);
        return response.rows[0];
    }
    catch (error) {
        console.log(error);
    };
};

export async function verUsuariosBD() { 
    try { 
        const sql = "SELECT * FROM usuarios";
        const response = await dbase.query(sql);
        return response.rows;
    }
    catch(error) { 
        console.log (error);
    };
};

/* const getDate = async () => {
    const query = {
        text: 'SELECT now()'
    };
    const response = await dbase.query(query);
    console.log(response.rows)
}; */

//getDate();// la funcion getDate es la funcion que hemos creado que se debe invocar

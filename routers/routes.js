import express from 'express';
import path from 'path';
import {
    agregarUsuarioBD,
    verUsuariosBD
} from '../database/queries.js';

const router = express.Router();
const __dirname = import.meta.dirname;

// GET: Devuelve la aplicación cliente disponible en el apoyo de la prueba.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

//usuario POST: Recibe los datos de un nuevo usuario y los almacena en PostgreSQL. 
router.post('/usuario', async (req, res) => {
    try {
        const { nombre, balance } = req.body;
        const datos = [nombre, balance];

        const response = await agregarUsuarioBD(datos);
        console.log(response.rows);
        res.status(201).json(response.rows)[0];
    }
    catch (error) { 
        res.status(500).send(error);
    } 
});
        
//usuarios GET: Devuelve todos los usuarios registrados con sus balances.
router.get("/usuarios", async (req, res) => {
  try {
    const response = await verUsuariosBD();
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

/*  Rutas que se deben crear
● /usuario PUT: Recibe los datos modificados de un usuario registrado y los actualiza. 
● /usuario DELETE: Recibe el id de un usuario registrado y lo elimina . 
● /transferencia POST: Recibe los datos para realizar una nueva transferencia. Se 
debe ocupar una transacción SQL en la consulta a la base de datos. 
● /transferencias GET: Devuelve todas las transferencias almacenadas en la base de 
datos en formato de arreglo. */

router.get('*', (req, res) => {
    res.send("Ruta no encontrada, por favor revise su URL");
});

export default router;
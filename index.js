import express from 'express';
import path from 'path';
import router from './routers/routes.js';
const app=express();
const port = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

//midellwares
app.use(express.json()); //necesario para que funciones los metodos POST
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'database')));
app.use(express.static(path.join(__dirname, 'routes')));
app.use(express.static(path.join(__dirname, 'config')));

app.use('/', router);

app.listen(port, console.log(`Example app listening on port http://localhost:${port}`));
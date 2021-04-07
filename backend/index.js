require('dotenv').config(); // busca archivos .env y establece esa variables
// en las variables de entorno de node

const express = require('express');


const { dbConnection } = require('./database/configuration');

// Crear el servidor de express
const app = express();

// Base de Datos
dbConnection();

// Rutas
app.use( '/api/personero', require('./routes/personero.routes'));

// Server
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
})

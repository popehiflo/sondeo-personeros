const express = require('express');


const { dbConnection } = require('./database/configuration');

// Crear el servidor de express
const app = express();

// Base de Datos
dbConnection();

// Rutas
app.use( '/api/personero', require('./routes/personero.routes'));
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto ' + 3000);
})

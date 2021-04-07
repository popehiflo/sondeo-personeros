const express = require('express');

// Crear el servidor de express
const app = express();


// Rutas
app.use( '/api/personero', require('./routes/personero.routes'));
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto ' + 3000);
})

//mongodb+srv://personero_user:9IO0asG4XWg77Eff@cluster0.6by7g.mongodb.net/personerodb
//personero_user
//9IO0asG4XWg77Eff
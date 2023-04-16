const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('./routes/usuario.routes');

const bp = require('body-parser');
const app = express();

// Body Parser
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.listen(3000);

async function start(){
    try {
        const db = await  mongoose.connect('mongodb://localhost:27017/Proyecto2_Archivos', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        });
        console.log("Conectado a la base de datos: ", db.connection.name);
    } catch (error) {
        console.log('Error: ', error);
    }
}

start();

app.use("/user", usuarioRoutes);

console.log('Servidor Http escuchando en el puerto 3000');
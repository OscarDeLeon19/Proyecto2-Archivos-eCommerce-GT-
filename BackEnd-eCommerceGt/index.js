const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const usuarioRoutes = require('./routes/usuario.routes');
const productoRoutes = require('./routes/producto.routes');
const ventaRoutes = require('./routes/venta.routes');
const pedidoRoutes= require('./routes/pedido.routes');

const bp = require('body-parser');
const app = express();

app.use(cors());

// Body Parser
app.use(bp.json({limit: "2mb"}));
app.use(bp.urlencoded({ extended: true, limit: "2mb" }));

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

app.use("/productos", productoRoutes);

app.use("/venta", ventaRoutes);

app.use("/pedido", pedidoRoutes)

console.log('Servidor Http escuchando en el puerto 3000');


const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;

const ventaSchema = new Schema({
    comprador: String,
    tarjetaCredito: String,
    fecha: String,
    producto: String,
    precio: Number,
    vendedor: String,
    idProducto: String
}, { versionKey: false });

module.exports = model('ventas', ventaSchema);
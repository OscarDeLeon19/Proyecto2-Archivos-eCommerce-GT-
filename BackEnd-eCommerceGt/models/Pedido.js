
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;

const pedidoSchema = new Schema({
    comprador: String,
    fechaRealizacion: String,
    fechaEntrega: String,
    total: Number,
    direccion: String,
    productos: Array,
    estado: String
}, { versionKey: false });

module.exports = model('pedidos', pedidoSchema);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;

const productoSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    imagen: String,
    categoria: Array,
    usuario: String,
    estado: String
}, { versionKey: false });

module.exports = model('productos', productoSchema);
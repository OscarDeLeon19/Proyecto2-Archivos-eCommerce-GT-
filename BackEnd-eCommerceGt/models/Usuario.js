const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;

const usuarioSchema = new Schema({
    nombre: String,
    telefono: String,
    correo: String,
    direccion: String,
    fechaNacimiento: String,
    username: String,
    password: String,
    tipoUsuario: String,
    tarjetas: Array
}, { versionKey: false });

module.exports = model('usuarios', usuarioSchema);
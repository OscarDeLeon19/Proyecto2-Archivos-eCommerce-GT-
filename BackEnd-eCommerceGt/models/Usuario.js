const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;

const usuarioSchema = new Schema({
    nombre: String,
    telefono: String,
    correo: String,
    direccion: String,
    fechaNacimiento: Date,
    username: String,
    password: String,
    tipoUsuario: String
}, { versionKey: false });

module.exports = model('usuarios', usuarioSchema);
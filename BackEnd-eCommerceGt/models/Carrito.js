
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;

const carritoSchema = new Schema({
    username: String,
    productos: Array
}, { versionKey: false });

module.exports = model('carritos', carritoSchema);
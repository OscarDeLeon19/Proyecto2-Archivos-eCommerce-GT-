const { request, response } = require("express");
const Usuario = require("../models/Usuario");

const insertarUsuario = async (req = request, res = response) => {
    try {
        const insert = new Usuario(req.body);
        const insertUsuario = await insert.save();
        res.status(200).json({
            message: `Usuario creado correctamente`,
            error: null
        });

    } catch (error) {
        res.status(404).json({
            message: `Error al crear usuario, el username "${error.keyValue.username}" ya esta en uso`,
            error
        });
    }
}

const buscarUsuarioLogin = async (req = request, res = response) => {
    try {
        const { username, password } = req.query;
        const busqueda = await Usuario.findOne({ username, password });
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al buscar un usuario`,
            error
        });
    }
}

const agregarTarjeta = async (req = request, res = response) => {
    try {
        const { username, tarjeta } = req.body;
        const busqueda = await Usuario.updateOne(
            { username }, {$push: { tarjetas: tarjeta }}
        ); 
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al agregar tarjeta al usuario ${username}`,
            error
        });
    }
}

const borrarTarjeta = async (req = request, res = response) => {
    try {
        const { username, numero } = req.body;
        const busqueda = await Usuario.updateOne(
            { username }, {$pull: { tarjetas: {numero} }}
        ); 
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al borrar tarjeta al usuario ${username}`,
            error
        });
    }
}

module.exports = {
    insertarUsuario,
    buscarUsuarioLogin,
    agregarTarjeta,
    borrarTarjeta
}
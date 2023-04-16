const { request, response } = require("express");
const Usuario = require("../models/Usuario");

const insertarUsuario = async (req = request, res = response) => {
    try {
        const insert = new Usuario(req.body);
        const insertUsuario = await insert.save();
        res.status(200).json(insertUsuario);

    } catch (error) {
        res.status(404).json({
            message:`Error al insertar usuario, el username ${error.keyValue.username} esta duplicado`,
            error
        });
    }
}

const buscarUsuarioLogin = async (req = request, res = response) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const busqueda = await Usuario.findOne({username, password});
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message:`Error al buscar un usuario`,
            error
        });
    }
}

module.exports = {
    insertarUsuario,
    buscarUsuarioLogin
}
const { request, response } = require("express");
const Carrito = require("../models/Carrito");

const insertarCarrito = async (req = request, res = response) => {
    try {
        const insert = new Carrito(req.body);
        const insertarCarrito = await insert.save();
        res.status(200).json({
            message:`Carrito creado correctamente`,
            error: null
        });

    } catch (error) {
        res.status(404).json({
            message:`Error al crear carrito, el username "${error.keyValue.username}" ya esta en uso`,
            error
        });
    }
}

const buscarCarrito = async (req = request, res = response) => {
    try {
        const {username} = req.query;
        const busqueda = await Usuario.findOne({username});
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message:`Error al buscar un usuario`,
            error
        });
    }
}

module.exports = {
    insertarCarrito,
    buscarCarrito
}

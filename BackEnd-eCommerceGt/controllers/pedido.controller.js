const { request, response } = require("express");
const Pedido = require("../models/Pedido");

const insertarPedido = async (req = request, res = response) => {
    try {
        const insert = new Pedido(req.body);
        const insertarPedido = await insert.save();
        res.status(200).json({
            message:`Pedido ingresado correctamente`,
            error: null
        });

    } catch (error) {
        res.status(404).json({
            message:`Error al ingresar la venta`,
            error
        });
    }
}

const verPedidos = async (req = request, res = response) => {
    try {
        const { username } = req.query;
        const busqueda = await Pedido.find({ username });
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al buscar pedidos`,
            error
        });
    }
}

module.exports = {
    insertarPedido,
    verPedidos
}

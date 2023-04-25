const { request, response } = require("express");
const Pedido = require("../models/Pedido");
const { ObjectId } = require("mongodb");

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
        const busqueda = await Pedido.find({ "comprador" :username });
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al buscar pedidos`,
            error
        });
    }
}

const verPedidosEnCurso = async (req = request, res = response) => {
    try {
        const { estado } = req.query;
        const busqueda = await Pedido.find({ estado });
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al buscar pedidos`,
            error
        });
    }
}

const modificarEstado = async (req = request, res = response) => {
    try {
        const { _id, estado } = req.body;
        console.log(_id);
        const busqueda = await Pedido.updateOne({ "_id": new ObjectId(_id) },{
            $set: {
                estado
            }
        });
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
    verPedidos,
    verPedidosEnCurso,
    modificarEstado
}

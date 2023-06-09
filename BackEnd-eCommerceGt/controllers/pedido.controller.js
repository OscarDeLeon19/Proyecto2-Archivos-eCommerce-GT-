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
            message:`Error al ingresar el pedido`,
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
        const busqueda = await Pedido.updateOne({ "_id": new ObjectId(_id) },{
            $set: {
                estado
            }
        });
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al modificar estado`,
            error
        });
    }
}

const obtenerPedido = async (req = request, res = response) => {
    try {
        const { _id } = req.query;
        const busqueda = await Pedido.findById({ _id });
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al buscar el pedido`,
            error
        });
    }
}

const cambiarFechaEntrega = async (req = request, res = response) => {
    try {
        const { _id, fechaEntrega } = req.body;
        const busqueda = await Pedido.updateOne({ "_id": new ObjectId(_id) },{
            $set: {
                fechaEntrega
            }
        });
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al modificar Pedido`,
            error
        });
    }
}

const reportePedidos = async (req = request, res = response) => {
    try {
        const {fechaInicial, fechaFinal} = req.query;
        const reporte = await Pedido.aggregate([
            {
              $match: {
                fechaRealizacion: {
                  $gte: fechaInicial,
                  $lte: fechaFinal
                }
              }
            },
            {
              $group: {
                _id: "$comprador",
                pedidosRealizados: { $sum: 1 }
              }
            },
            {
              $sort: { pedidosRealizados: -1 }
            },
            {
              $limit: 10
            }
          ]);
        res.status(200).json(reporte);

    } catch (error) {
        res.status(404).json({
            message: `Error al buscar pedido`,
            error
        });
    }
}

module.exports = {
    insertarPedido,
    verPedidos,
    verPedidosEnCurso,
    modificarEstado,
    obtenerPedido,
    cambiarFechaEntrega,
    reportePedidos
}

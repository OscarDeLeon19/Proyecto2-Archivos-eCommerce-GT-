const { request, response } = require("express");
const Venta = require("../models/Venta");

const insertarVenta = async (req = request, res = response) => {
    try {
        const insertarVenta = await Venta.insertMany(req.body)
        res.status(200).json({
            message:`Venta ingresada correctamente`,
            error: null,
            value: insertarVenta
        });

    } catch (error) {
        res.status(404).json({
            message:`Error al ingresar la venta`,
            error
        });
    }
}

module.exports = {
    insertarVenta
}

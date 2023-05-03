const { request, response } = require("express");
const Venta = require("../models/Venta");

const insertarVenta = async (req = request, res = response) => {
    try {
        const insertarVenta = await Venta.insertMany(req.body)
        res.status(200).json({
            message: `Venta ingresada correctamente`,
            error: null,
            value: insertarVenta
        });

    } catch (error) {
        res.status(404).json({
            message: `Error al ingresar la venta`,
            error
        });
    }
}

const reporteProductosVendidos = async (req = request, res = response) => {
    try {
        const {fechaInicial, fechaFinal} = req.query;
        const reporte = await Venta.aggregate([
            {
                $match: {
                    fecha: {
                        $gte: fechaInicial,
                        $lte: fechaFinal
                    }
                }
            },
            {
                $group: {
                    _id: "$producto",
                    ventas: { $sum: 1 }
                }
            },
            {
                $sort: { ventas: -1 }
            },
            {
                $limit: 10
            }
        ]);
        res.status(200).json(reporte);

    } catch (error) {
        res.status(404).json({
            message: `Error al ver producto`,
            error
        });
    }
}

const reporteGanancias = async (req = request, res = response) => {
    try {
        const {fechaInicial, fechaFinal} = req.query;
        const reporte = await Venta.aggregate([
            {
              $match: {
                fecha: {
                  $gte: fechaInicial ,
                  $lte: fechaFinal
                }
              }
            },
            {
              $group: {
                _id: "$comprador",
                ganancias: {
                  $sum: { $multiply: [ "$precio", 0.05 ] } 
                }
              }
            },
            {
              $sort: {
                ganancias: -1
              }
            },
            {
              $limit: 5
            }
          ]);
        res.status(200).json(reporte);

    } catch (error) {
        res.status(404).json({
            message: `Error al ver reporte`,
            error
        });
    }
}

const reporteVentas = async (req = request, res = response) => {
    try {
        const {fechaInicial, fechaFinal} = req.query;
        const reporte = await Venta.aggregate([
            {
              $match: {
                fecha: {
                  $gte: fechaInicial,
                  $lte: fechaFinal
                }
              }
            },
            {
              $group: {
                _id: "$vendedor",
                productos: { $sum: 1 }
              }
            },
            {
              $sort: { productos: -1 }
            },
            {
              $limit: 5
            }
          ]);
        res.status(200).json(reporte);

    } catch (error) {
        res.status(404).json({
            message: `Error al ingresar la venta`,
            error
        });
    }
}

module.exports = {
    insertarVenta,
    reporteProductosVendidos,
    reporteGanancias,
    reporteVentas
}

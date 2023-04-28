const { request, response } = require("express");
const Producto = require("../models/Producto");
const { ObjectId } = require("mongodb");

const verProductos = async (req = request, res = response) => {
    try {
        const { username } = req.query;
        const busqueda = await Producto.find({ "usuario": { $ne: username }, "estado": "aprobado" });
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al hacer busqueda de productos`,
            error
        });
    }
}

const verProductosFiltrados = async (req = request, res = response) => {
    try {
        const { nombre, username } = req.query;
        const busqueda = await Producto.find({ "nombre": new RegExp(nombre, 'i'), "usuario": { $ne: username }, "estado": "aprobado" });
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al hacer busqueda de productos`,
            error
        });
    }
}

const agregarProducto = async (req = request, res = response) => {
    try {
        const insert = new Producto(req.body);
        const insertProducto = await insert.save();
        res.status(200).json(insertProducto);
    } catch (error) {
        res.status(404).json({
            message: `Error al ingresar producto`,
            error
        });
    }
}

const verMisProductos = async (req = request, res = response) => {
    try {
        const { username } = req.query;
        const busqueda = await Producto.find({ "usuario": username });
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al hacer busqueda de productos`,
            error
        });
    }
}

const verProductoPorId = async (req = request, res = response) => {
    try {
        const { id } = req.query;
        const busqueda = await Producto.findById(id);
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al hacer busqueda del producto`,
            error
        });
    }
}

const actualizarProducto = async (req = request, res = response) => {
    try {
        const { _id, nombre, descripcion, precio, categoria, imagen } = req.body;
        const actualizacion = await Producto.updateOne({ "_id": new ObjectId(_id) },
            {
                $set: {
                    nombre,
                    descripcion,
                    precio,
                    imagen,
                    categoria,
                    estado: "pendiente"
                }
            });
        res.status(200).json(actualizacion);
    } catch (error) {
        console.log(error);

        res.status(404).json({
            message: `Error al actualizar Producto`,
            error
        });
    }
}

const borrarProducto = async (req = request, res = response) => {
    try {
        const { _id } = req.query;
        const eliminar = await Producto.deleteOne({ "_id": new ObjectId(_id) });
        res.status(200).json(eliminar);
    } catch (error) {
        res.status(404).json({
            message: `Error al actualizar Producto`,
            error
        });
    }
}

const verProductosPendientes = async (req = request, res = response) => {
    try {
        const busqueda = await Producto.find({ "estado": "pendiente" });
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al hacer busqueda de productos`,
            error
        });
    }
}

const cambiarEstado = async (req = request, res = response) => {
    try {
        const { _id, estado } = req.body
        const busqueda = await Producto.updateOne({ "_id": new ObjectId(_id) }, { $set: { estado } });
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message: `Error al hacer busqueda de productos`,
            error
        });
    }
}

const reporteProductosEnVenta = async (req = request, res = response) => {
    try {
        const reporte = await Producto.aggregate([
            {
                $match: {estado: "aprobado"}
            },
            {
                $group: {
                    _id: "$usuario",
                    productos: { $sum: 1 }
                }
            },
            {
                $sort: { productos: -1 }
            },
            {
                $limit: 10
            }
        ]);
        res.status(200).json(reporte);

    } catch (error) {
        res.status(404).json({
            message: `Error al buscar productos`,
            error
        });
    }
}

module.exports = {
    verProductos,
    verProductosFiltrados,
    agregarProducto,
    verMisProductos,
    verProductoPorId,
    actualizarProducto,
    borrarProducto,
    verProductosPendientes,
    cambiarEstado,
    reporteProductosEnVenta
}
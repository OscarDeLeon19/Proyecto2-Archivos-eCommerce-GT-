const { request, response } = require("express");
const Producto = require("../models/Producto");


const verProductos = async (req = request, res = response) => {
    try {
        const { username } = req.query;
        const busqueda = await Producto.find({ "usuario": { $ne: username } });
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
        const busqueda = await Producto.find({ "nombre": new RegExp(nombre, 'i'), "usuario": { $ne: username } });
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
        const busqueda = await Producto.find({ "usuario":  username });
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

module.exports = {
    verProductos,
    verProductosFiltrados,
    agregarProducto,
    verMisProductos,
    verProductoPorId
}
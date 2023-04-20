const { request, response } = require("express");
const Producto = require("../models/Producto");


const verProductos = async (req = request, res = response) => {
    try {
        const busqueda = await Producto.find();
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message:`Error al hacer busqueda de productos`,
            error
        });
    }
}

const verProductosFiltrados = async (req = request, res = response) => {
    try {
        const { nombre } = req.query;
        const busqueda = await Producto.find({"nombre": new RegExp(nombre, 'i')});
        res.status(200).json(busqueda);
    } catch (error) {
        res.status(404).json({
            message:`Error al hacer busqueda de productos`,
            error
        });
    }
}

module.exports = {
    verProductos,
    verProductosFiltrados
}
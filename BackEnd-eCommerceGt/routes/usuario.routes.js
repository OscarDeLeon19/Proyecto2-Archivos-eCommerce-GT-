const express = require('express');
const Usuario = require('../models/Usuario');

const router = express.Router();
const controllerUsuario = require("../controllers/usuario.controller");

router.post('/', controllerUsuario.insertarUsuario);

router.get('/', controllerUsuario.buscarUsuarioLogin);

router.put('/addCard', controllerUsuario.agregarTarjeta);

router.put('/deleteCard', controllerUsuario.borrarTarjeta);

router.put('/update', controllerUsuario.actualizarUsuario);

router.get('/verUsuariosAdmin', controllerUsuario.verUsuariosAdmin);

router.get('/buscarUsuario', controllerUsuario.buscarUsuarioUsername);

router.delete('/borrarUsuario', controllerUsuario.borrarUsuario);

module.exports = router;

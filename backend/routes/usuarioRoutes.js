const express = require('express');
const usuarioController = require('../controllers/usuarioController.js');

const api = express.Router();

api.post('/usuario',usuarioController.createUsuario);
api.get('/usuarios',usuarioController.getusuarios);
api.put('/usuario/update/:id', usuarioController.updateusuario);
api.put('/usuario/search/:id', usuarioController.buscarusuario);
api.delete('/usuario/delete/:id',usuarioController.deleteusuario)

module.exports = api;

const express = require('express');
const usuarioController = require('../controllers/usuarioController.js');

const api = express.Router();

api.post('/usuario',usuarioController.createEspacioCom);

module.exports = api;
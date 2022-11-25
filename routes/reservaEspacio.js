const express = require('express');
const reservaEspacioController = require('../controllers/reservaEspacio');

const api = express.Router();

api.post('/rervaEspacio',reservaEspacioController.createreservaEspacio);

module.exports = api;
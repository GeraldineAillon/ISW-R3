const express = require('express');
const reservaespacioController = require ('../controllers/reservaespacioController');

const api = express.Router();

api.post('/reservaespacio', reservaespacioController.createReservaespacio);
api.get('/reservaespacios',reservaespacioController.getReservaespacios);
api.put('/reservaespacio/update/:id', reservaespacioController.updateReservaespacio);
api.delete('/reservaespacio/',reservaespacioController.deleteReservaespacio)
api.get('/reservaespacio/search/:id',reservaespacioController.getReservaespacio);

module.exports = api
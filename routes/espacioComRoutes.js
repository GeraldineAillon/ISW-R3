const express = require('express');
const espacioComController = require('../controllers/espacioComController');

const api = express.Router();

api.post('/espacioCom',espacioComController.createEspacioCom);

module.exports = api;
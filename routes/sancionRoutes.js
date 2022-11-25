const express = require('express');
const sancionController = require('../controllers/sancionController');

const api = express.Router();

api.post('/sancion',sancionController.createsancion);

module.exports = api;
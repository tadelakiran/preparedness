const express = require('express');
const route = express.Router();
const controller = require('../Controllers/Controllers');

route.post('/add-data' , controller.addData);

module.exports = route;

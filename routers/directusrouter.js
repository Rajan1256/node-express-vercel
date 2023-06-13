const { Router } = require('express');
const directuscnt = require('../controllers/directuscontroller')

const app = Router();
app.get('/', directuscnt);
module.exports = app;
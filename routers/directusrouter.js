const { Router } = require('express');
const directuscnt = require('../controllers/directuscontroller')
const mondaycnt = require('../controllers/mondaycontroller')

const app = Router();
app.get('/', directuscnt);
app.get('/monday', mondaycnt);
module.exports = app;
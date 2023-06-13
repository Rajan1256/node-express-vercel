const { Router } = require('express');
const mondaycnt = require('../controllers/mondaycontroller')

const app = Router();
app.get('/', mondaycnt);
module.exports = app;
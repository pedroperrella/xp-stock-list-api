const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const investmentsRoute = require('./routes/investmentsRoute');
const assetsRoute = require('./routes/assetsRoute');
const accountRoute = require('./routes/accountRoute');

app.use('/investments', investmentsRoute);
app.use('/assets', assetsRoute);
app.use('/account', accountRoute);

module.exports = app;
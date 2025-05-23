const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/config.json');
const routes = require('./routes');

const app = express();
routes(app);
module.exports = app;
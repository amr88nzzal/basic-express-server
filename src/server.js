'use strict';
const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const app = express();
app.use(express.json());
app.use(logger);

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

app.get('/', (req, res) => {
  res.send('The server is live');
});

app.get('/person', validator, (req, res) => {
  const result = {
    Name: req.query.name,
  };
  res.send(result);
});


app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log('The server is live at port: ', port);
  });
}

module.exports = { start,app };
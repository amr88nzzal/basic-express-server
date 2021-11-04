'use strict';

function err500(req, res, next) {
  res.status(500).send('Error 500**');

}

module.exports = err500;
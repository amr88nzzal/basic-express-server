'use strict';

function err500(err,req, res, next) {
  res.status(500).send(`Error (500) : Invalid Query\n${err}`);

}

module.exports = err500;
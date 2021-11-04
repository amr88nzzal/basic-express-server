'use strict';

function logger(req, res, next) {
  console.log(`-----------\nRequest method:${req.method}\nRequest Rout:${req.path}\n-----------`);
  next();

}

module.exports = logger;
'use strict';

function validator (req, res, next) {
  (req.query.name)?next():next('error - invalid query (add a name in the request)');
}

module.exports = validator;
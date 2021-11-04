'use strict';

function validator (req, res, next) {
  if(req.query.name){next();}
  else
  {throw new Error('error - invalid query (add a name in the request)');}
}

module.exports = validator;
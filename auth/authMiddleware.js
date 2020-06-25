const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');
const bcrypt = require('bcryptjs');


module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token) {
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if (err) {
          res.status(401).json({ you: 'invalid username and/or password' });
        } else {
          req.decodedJwt = decodedToken;
          console.log(req.decodedJwt);
          next();
        }
      });
    } else {
      throw new Error('username and/or password does not match our records');
    }
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

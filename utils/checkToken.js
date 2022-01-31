const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    return next();
  } catch (err) {
    res.clearCookie('JWToken');
    return res.redirect('https://footbet.pp.ua/login');
  }
};

module.exports = checkToken;

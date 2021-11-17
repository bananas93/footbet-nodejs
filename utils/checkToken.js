const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');
    const decoded = jwt.verify(token, 'mC9XjvNqXP97cgKBVDDABPd2kUL2Uk6TYPQHatR0NnwM5PYBZmXTpAM2Snyi3vWWy6JP7qdTRcTtbFUXBmBeHjl3ejnyG1');
    req.userData = decoded;
    next();
  } catch (err) {
    res.clearCookie('JWToken');
    return res.redirect('https://footbet.site/login');
  }
};

module.exports = checkToken;

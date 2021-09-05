module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASS,
  DB: process.env.DB_DB,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// mysql://b1e4b719c973c0:6fe08bcc@us-cdbr-east-04.cleardb.com/heroku_0df55f8415e067d?reconnect=true

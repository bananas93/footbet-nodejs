/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Bet = require('./bet.model')(sequelize, Sequelize);
db.Match = require('./match.model')(sequelize, Sequelize);
db.Team = require('./team.model')(sequelize, Sequelize);
db.User = require('./user.model')(sequelize, Sequelize);
db.Tournament = require('./tournament.model')(sequelize, Sequelize);
db.Result = require('./result.model')(sequelize, Sequelize);

db.Tournament.hasMany(db.Result);
db.Match.hasMany(db.Bet);
db.Match.hasMany(db.Result);
db.Match.belongsTo(db.Tournament, { as: 'tournamentId', foreignKey: 'tournament_id' });
db.Match.belongsTo(db.Team, { as: 'homeTeam', foreignKey: 'home_team' });
db.Match.belongsTo(db.Team, { as: 'awayTeam', foreignKey: 'away_team' });
db.User.hasMany(db.Result);
db.User.hasMany(db.Bet);
db.Result.belongsTo(db.User);
db.Bet.belongsTo(db.User);

module.exports = db;

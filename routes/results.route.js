const { Router } = require('express');
const db = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  db.Result.findAll({
    attributes: [
      'id',
      'userId',
      [db.sequelize.fn('sum', db.sequelize.col('goals5')), 'goals5'],
      [db.sequelize.fn('sum', db.sequelize.col('difference')), 'difference'],
      [db.sequelize.fn('sum', db.sequelize.col('result')), 'result'],
      [db.sequelize.fn('sum', db.sequelize.col('score')), 'score'],
      [db.sequelize.fn('sum', db.sequelize.col('all')), 'all'],
    ],
    group: ['userId'],
    include: [{ model: db.User, as: 'user', attributes: ['name'] }],
  })
    .then((results) => {
      res.status(200).json(results);
    }).catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;

/* eslint-disable no-param-reassign */
const db = require('../models');

const findAll = async (tournament) => {
  // await db.sequelize.query('SELECT @curRank := 0;');
  // const result = await db.sequelize.query(`SELECT \`result\`.\`id\`, \`result\`.\`user_id\` AS \`userId\`, SUM(\`goals5\`) AS \`goals5\`, SUM(\`difference\`) AS \`difference\`, SUM(\`result\`) AS \`result\`, SUM(\`score\`) AS \`score\`, SUM(\`all\`) AS \`all\`, \`matches\`, \`user\`.\`name\` AS \`user_name\` FROM \`results\` AS \`result\` LEFT OUTER JOIN \`users\` AS \`user\` ON \`result\`.\`user_id\` = \`user\`.\`id\` WHERE \`result\`.\`tournament_id\` = ${tournament} GROUP BY\`userId\` ORDER BY \`result\`.\`all\` DESC, \`result\`.\`score\` DESC, \`result\`.\`result\` DESC, \`result\`.\`difference\` DESC, \`result\`.\`goals5\` DESC;`, { type: db.sequelize.QueryTypes.SELECT });
  const result = await db.Result.findAll({
    where: {
      tournament_id: tournament,
    },
    attributes: [
      'id',
      'userId',
      [db.sequelize.fn('sum', db.sequelize.col('result.goals5')), 'goals5'],
      [db.sequelize.fn('sum', db.sequelize.col('result.difference')), 'difference'],
      [db.sequelize.fn('sum', db.sequelize.col('result.result')), 'result'],
      [db.sequelize.fn('sum', db.sequelize.col('result.score')), 'score'],
      [db.sequelize.fn('sum', db.sequelize.col('result.all')), 'all'],
    ],
    order: [
      [db.sequelize.fn('SUM', db.sequelize.col('result.all')), 'DESC'],
      [db.sequelize.fn('SUM', db.sequelize.col('result.score')), 'DESC'],
      [db.sequelize.fn('SUM', db.sequelize.col('result.result')), 'DESC'],
      [db.sequelize.fn('SUM', db.sequelize.col('result.difference')), 'DESC'],
      [db.sequelize.fn('SUM', db.sequelize.col('result.goals5')), 'DESC'],
    ],
    include: [
      {
        model: db.User, as: 'user', attributes: ['id', 'name'],
      },
    ],
    group: ['userId'],
  });
  const resultRank = result.map((item, index) => {
    item.dataValues.rank = index + 1;
    item.dataValues.user_id = item.dataValues.user.id;
    item.dataValues.user_name = item.dataValues.user.name;
    delete item.dataValues.user;
    return item;
  });
  return resultRank;
};

const resultService = {
  findAll,
};

module.exports = resultService;

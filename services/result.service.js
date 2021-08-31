const db = require('../models');

const findAll = async (tournament) => {
  await db.sequelize.query('SELECT @curRank := 0;');
  const result = await db.sequelize.query(`SELECT \`result\`.\`id\`, \`result\`.\`user_id\` AS \`userId\`, SUM(\`goals5\`) AS \`goals5\`, SUM(\`difference\`) AS \`difference\`, SUM(\`result\`) AS \`result\`, SUM(\`score\`) AS \`score\`, SUM(\`all\`) AS \`all\`, \`matches\`, @curRank := @curRank + 1 AS \`rank\`, \`user\`.\`name\` AS \`user_name\` FROM \`results\` AS \`result\` LEFT OUTER JOIN \`users\` AS \`user\` ON \`result\`.\`user_id\` = \`user\`.\`id\` WHERE \`result\`.\`tournament_id\` = ${tournament} GROUP BY\`userId\`;`, { type: db.sequelize.QueryTypes.SELECT });
  // const result = await db.Result.findAll({
  //   where: {
  //     tournament_id: tournament,
  //   },
  //   attributes: [
  //     'id',
  //     'userId',
  //     [db.sequelize.fn('count', db.sequelize.col('*')), 'matches'],
  //     [db.sequelize.fn('sum', db.sequelize.col('goals5')), 'goals5'],
  //     [db.sequelize.fn('sum', db.sequelize.col('difference')), 'difference'],
  //     [db.sequelize.fn('sum', db.sequelize.col('result')), 'result'],
  //     [db.sequelize.fn('sum', db.sequelize.col('score')), 'score'],
  //     [db.sequelize.fn('sum', db.sequelize.col('all')), 'all'],
  //     [db.sequelize.literal('@curRank := @curRank + 1'), 'rank'],
  //     [db.sequelize.literal('(SELECT @curRank := 0)'), 'r'],
  //   ],
  //   group: ['userId'],
  //   include: [
  //     { model: db.User, as: 'user', attributes: ['id', 'name'] },
  //   ],
  // });
  return result;
};

const resultService = {
  findAll,
};

module.exports = resultService;

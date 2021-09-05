const db = require('../models');

const findAll = async (tournament) => {
  // await db.sequelize.query('SELECT @curRank := 0;');
  // const result = await db.sequelize.query(`SELECT "result"."id", "result"."user_id" AS "userId", sum("goals5") AS "goals5", sum("difference") AS "difference", sum("result") AS "result", sum("score") AS "score", sum("all") AS "all", (RANK() OVER (ORDER BY all DESC)) AS "rank", "user"."id" AS "user.id", "user"."name" AS "user.name" FROM "results" AS "result" LEFT OUTER JOIN "users" AS "user" ON "result"."user_id" = "user"."id" WHERE "result"."tournament_id" = '${tournament}' GROUP BY "result"."user_id";`, { type: db.sequelize.QueryTypes.SELECT });
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
      // [db.sequelize.literal('(RANK() OVER (PARTITION BY all ORDER BY all DESC))'), 'rank'],
    ],
    include: [
      {
        model: db.User, as: 'user', attributes: ['id', 'name'],
      },
    ],
    group: ['userId', 'result.id'],
  });
  return result;
};

const resultService = {
  findAll,
};

module.exports = resultService;

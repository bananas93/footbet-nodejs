const db = require('../models');
const createOrUpdate = require('../helpers/createOrUpdate');

const createOrUpdateBet = async (userId, homeBet, awayBet, matchId) => {
  const values = {
    homeBet: Number(homeBet),
    awayBet: Number(awayBet),
    userId,
    matchId: Number(matchId),
  };
  const condition = {
    userId: Number(userId),
    matchId: Number(matchId),
  };
  const result = await createOrUpdate(db.Bet, values, condition);
  return result;
};

const deleteById = async (id) => db.Bet.destroy({ where: { id } });

const betService = {
  createOrUpdateBet,
  deleteById,
};

module.exports = betService;

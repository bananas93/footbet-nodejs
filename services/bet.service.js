const db = require('../models');
const createOrUpdate = require('../helpers/createOrUpdate');

const createOrUpdateBet = async (userId, homeBet, awayBet, matchId, tournamentId) => {
  const values = {
    homeBet: Number(homeBet),
    awayBet: Number(awayBet),
    userId,
    matchId: Number(matchId),
    tournamentId: Number(tournamentId),
  };
  const condition = {
    userId: Number(userId),
    matchId: Number(matchId),
  };
  const result = await createOrUpdate(db.Bet, values, condition);
  return result;
};

const findAllUserBets = async (id, tournament) => {
  const result = await db.Bet.findAll({
    where: { userId: id, tournamentId: tournament },
    attributes: ['id', 'homeBet', 'awayBet'],
    include: [
      {
        model: db.Match,
        attributes: ['id', 'stage', 'status', 'homeGoals', 'awayGoals', 'home_team', 'away_team'],
        include: [{
          model: db.Team,
          as: 'homeTeam',
          attributes: ['id', 'name'],
        },
        {
          model: db.Team,
          as: 'awayTeam',
          attributes: ['id', 'name'],
        }],
      },
    ],
  });
  return result;
};

const deleteById = async (id) => db.Bet.destroy({ where: { id } });

const betService = {
  createOrUpdateBet,
  deleteById,
  findAllUserBets,
};

module.exports = betService;

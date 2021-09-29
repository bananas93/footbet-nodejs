const createOrUpdate = require('../helpers/createOrUpdate');
const db = require('../models');

const calculate = (homeBet, awayBet, homeGoals, awayGoals) => {
  const results = {
    score: 0,
    result: 0,
    difference: 0,
    goals5: 0,
    all: 0,
    matches: 0,
  };
  if (homeGoals === homeBet && awayGoals === awayBet) {
    results.score += 1;
    results.result += 1;
  } else if (homeGoals > awayGoals && homeBet > awayBet) {
    results.result += 1;
  } else if (homeGoals < awayGoals && homeBet < awayBet) {
    results.result += 1;
  } else if (homeGoals === awayGoals && homeBet === awayBet && homeGoals !== homeBet) {
    results.result += 1;
  }
  if (
    (homeGoals + awayGoals >= 5 && homeBet + awayBet >= 5)
    && (homeGoals === homeBet && awayGoals === awayBet)
  ) {
    results.goals5 += 1;
  }
  if (homeGoals - awayGoals === homeBet - awayBet) {
    results.difference += 1;
  }
  results.all = (results.result * 2) + (results.score * 2);
  results.all += results.goals5 * 2;
  results.all += results.difference;
  results.matches += 1;
  return results;
};

const calcultePoints = async (match) => {
  const {
    // eslint-disable-next-line camelcase
    id, stage, status, homeGoals, awayGoals, tournament_id,
  } = match;
  if (status === 'Заплановано') return;
  db.User.findAll()
    .then((users) => {
      users.forEach((user) => {
        const userId = user.dataValues.id;
        db.Bet.findOne({ where: { user_id: userId, match_id: id } })
          .then((bet) => {
            if (bet) {
              const { homeBet, awayBet } = bet;
              const results = calculate(
                Number(homeBet),
                Number(awayBet),
                Number(homeGoals),
                Number(awayGoals),
              );
              const {
                score, result, difference, goals5, all, matches,
              } = results;
              const values = {
                userId,
                matchId: Number(id),
                tournamentId: Number(tournament_id),
                stage,
                score,
                result,
                difference,
                goals5,
                all,
                matches,
              };
              createOrUpdate(db.Result, values, { userId, matchId: Number(id) });
            }
          }).catch((err) => {
            console.log(err);
          });
      });
    }).catch((err) => {
      console.log(err);
    });
};

const calcFunctions = {
  calculate,
  calcultePoints,
};

module.exports = calcFunctions;

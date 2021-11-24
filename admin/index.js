/* eslint-disable no-param-reassign */
const AdminBro = require('admin-bro');
const AdminBroSequelize = require('@admin-bro/sequelize');
const jwt = require('jsonwebtoken');
const calcFunctions = require('../utils/calcPoints');
const socket = require('../socketapi');
const db = require('../models');
const { getBetsByMatch } = require('../services/bet.service');

AdminBro.registerAdapter(AdminBroSequelize);

const {
  Team, Tournament, Match, User, Bet, Result, Chat,
} = db;

const adminBro = new AdminBro({
  databases: [db.sequelize],
  rootPath: '/admin',
  resources: [
    {
      resource: Team,
      options: {
        properties: {
          updatedAt: {
            isVisible: {
              show: false,
            },
          },
          createdAt: {
            isVisible: {
              show: false,
            },
          },
        },
      },
    },
    {
      resource: Tournament,
      options: {
        properties: {
          name: {
            position: 1,
          },
          slug: {
            position: 2,
          },
          logo: {
            position: 3,
          },
          groupTours: {
            position: 4,
          },
          playoffTours: {
            position: 5,
          },
          archive: {
            position: 6,
          },
          updatedAt: {
            isVisible: {
              show: false,
            },
          },
          createdAt: {
            isVisible: {
              show: false,
            },
          },
        },
      },
    },
    {
      resource: Match,
      options: {
        properties: {
          home_team: {
            position: 1,
          },
          away_team: {
            position: 2,
          },
          homeGoals: {
            position: 3,
          },
          awayGoals: {
            position: 4,
          },
          updatedAt: {
            isVisible: {
              show: false,
            },
          },
          createdAt: {
            isVisible: {
              show: false,
            },
          },
        },
        actions: {
          edit: {
            after: async (originalResponse, request) => {
              if (Object.keys(request.payload).length) {
                const { JWToken } = request.cookies;
                const decoded = jwt.verify(JWToken, process.env.JWT_SECRET);
                calcFunctions.calcultePoints(request.payload);
                const { id } = request.payload;
                let result = await getBetsByMatch(id);
                result = result.map((bet) => {
                  const myBet = bet.dataValues.user.id === decoded.id;
                  bet.dataValues.bet = `${bet.homeBet}-${bet.awayBet}`;
                  const points = calcFunctions.calculate(
                    bet.homeBet,
                    bet.awayBet,
                    request.payload.homeGoals,
                    request.payload.awayGoals,
                  );
                  bet.dataValues.points = points.all;
                  bet.dataValues.myBet = myBet;
                  return bet;
                });
                result.sort((a, b) => b.dataValues.points - a.dataValues.points);
                request.payload.bets = result;
                socket.io.emit('matchUpdate', request.payload);
              }
              return originalResponse;
            },
          },
        },
      },
    },
    {
      resource: User,
      options: {
        properties: {
          updatedAt: {
            isVisible: {
              show: false,
            },
          },
          createdAt: {
            isVisible: {
              show: false,
            },
          },
        },
      },
    },
    { resource: Bet },
    {
      resource: Result,
      options: {
        properties: {
          updatedAt: {
            isVisible: {
              show: false,
            },
          },
          createdAt: {
            isVisible: {
              show: false,
            },
          },
        },
      },
    },
    { resource: Chat },
  ],
});

module.exports = adminBro;

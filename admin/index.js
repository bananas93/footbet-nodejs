const AdminBro = require('admin-bro');
const AdminBroSequelize = require('@admin-bro/sequelize');
const calcPoints = require('../utils/calcPoints');

const db = require('../models');

AdminBro.registerAdapter(AdminBroSequelize);

const {
  Team, Tournament, Match, User, Bet, Result,
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
              calcPoints(request.payload);
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
  ],
});

module.exports = adminBro;

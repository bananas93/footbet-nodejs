module.exports = (sequelize, DataTypes) => {
  const Bet = sequelize.define('bet', {
    homeBet: {
      type: DataTypes.INTEGER,
      field: 'home_bet',
      allowNull: false,
    },
    awayBet: {
      type: DataTypes.INTEGER,
      field: 'away_bet',
      allowNull: false,
    },
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'bets',
  });
  return Bet;
};

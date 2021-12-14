module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('match', {
    stage: {
      type: DataTypes.ENUM('1 тур', '2 тур', '3 тур', '4 тур', '5 тур', '6 тур', '1/16 фіналу', '1/8 фіналу', '1/4 фіналу', '1/2 фіналу', 'Фінал'),
      allowNull: false,
    },
    group: {
      type: DataTypes.ENUM('A', 'B', 'C', 'D', 'E', 'F', 'H', 'G'),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('Заплановано', 'Live', 'Завершено', 'Скасовано', 'Перенесено'),
      defaultValue: 'Заплановано',
      allowNull: false,
    },
    homeGoals: {
      type: DataTypes.INTEGER,
      field: 'home_goals',
      defaultValue: 0,
      allowNull: false,
    },
    awayGoals: {
      type: DataTypes.INTEGER,
      field: 'away_goals',
      defaultValue: 0,
      allowNull: false,
    },
    datetime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'matches',
  });
  return Match;
};

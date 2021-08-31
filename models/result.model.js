module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define('result', {
    stage: {
      type: DataTypes.STRING,
      field: 'stage',
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      field: 'score',
    },
    result: {
      type: DataTypes.INTEGER,
      field: 'result',
    },
    difference: {
      type: DataTypes.INTEGER,
      field: 'difference',
    },
    goals5: {
      type: DataTypes.INTEGER,
      field: 'goals5',
    },
    all: {
      type: DataTypes.INTEGER,
      field: 'all',
    },
    matches: {
      type: DataTypes.INTEGER,
      field: 'matches',
    },
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'results',
  });
  return Result;
};

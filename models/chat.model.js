module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define('chat', {
    message: {
      type: DataTypes.STRING,
      field: 'away_bet',
      allowNull: false,
    },
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'chat',
  });
  return Chat;
};
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define(
    'notification',
    {
      registrationToken: {
        type: DataTypes.STRING,
        field: 'registration_token',
        allowNull: false,
      },
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: 'notifications',
    },
  );
  return Notification;
};

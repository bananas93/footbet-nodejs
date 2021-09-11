module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('team', {
    name: {
      type: DataTypes.STRING,
      field: 'name',
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('Клуб', 'Збірна'),
      field: 'type',
      defaultValue: 'Клуб',
      allowNull: false,
    },
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'teams',
  });
  return Team;
};

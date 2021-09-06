module.exports = (sequelize, DataTypes) => {
  const Tournament = sequelize.define('tournament', {
    name: {
      type: DataTypes.STRING,
      field: 'name',
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      field: 'slug',
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
      field: 'logo',
      allowNull: false,
    },
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'tournaments',
  });
  return Tournament;
};

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
    groupTours: {
      type: DataTypes.INTEGER,
      field: 'groups',
      allowNull: false,
    },
    playoffTours: {
      type: DataTypes.INTEGER,
      field: 'playoff',
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
      field: 'logo',
      allowNull: false,
    },
    archive: {
      type: DataTypes.BOOLEAN,
      field: 'archive',
    },
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'tournaments',
  });
  return Tournament;
};

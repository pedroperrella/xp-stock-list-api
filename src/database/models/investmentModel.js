module.exports = (sequelize, DataTypes) => {
  const Investment = sequelize.define("Investment", {
    clientId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    assetId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    tableName: 'Investments',
  });

  Investment.associate = (models) => {
    models.Client.belongsToMany(models.Asset, {
      as: 'assets',
      through: Investment,
      foreignKey: 'clientId',
      otherKey: 'assetId',
    });

    models.Asset.belongsToMany(models.Client, {
      as: 'clients',
      through: Investment,
      foreignKey: 'assetId',
      otherKey: 'clientId',
    });
  };

  return Investment;
};
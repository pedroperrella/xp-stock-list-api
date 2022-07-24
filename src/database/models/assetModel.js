module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define("Asset", {
    assetId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'Assets',
  });

  return Asset;
};

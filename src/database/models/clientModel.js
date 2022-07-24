module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Client", {
    clientId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullName: DataTypes.STRING,
    balance: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'Clients',
  });

  return Client;
};

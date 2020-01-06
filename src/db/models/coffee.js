'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coffee = sequelize.define('Coffee', {
    flavor: DataTypes.STRING,
    decaffinated: DataTypes.BOOLEAN
  }, {});

  Coffee.associate = function(models) {
    Coffee.belongsTo(models.Brand);
  };

  return Coffee;
};
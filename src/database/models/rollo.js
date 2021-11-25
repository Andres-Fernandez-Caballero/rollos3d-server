'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rollo extends Model {
  
    static associate(models) {
      Rollo.belongsTo(models.Marca);
    }
  };
  Rollo.init({
    colorNombre: DataTypes.STRING,
    colorHex: DataTypes.STRING,
    temperatura: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rollo',
  });
  return Rollo;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ingredients.init({
    ingredientName: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    measurement: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ingredients',
  });
  return Ingredients;
};
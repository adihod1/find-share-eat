"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Quantity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quantity.init(
    {
      quantityName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Quantity",
      tableName: "Quantities",
    }
  );
  return Quantity;
};

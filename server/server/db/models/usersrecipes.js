"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UsersRecipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsersRecipes.init(
    {
      userId: DataTypes.INTEGER,
      recipeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UsersRecipes",
      tableName: "UsersRecipes",
    }
  );
  return UsersRecipes;
};

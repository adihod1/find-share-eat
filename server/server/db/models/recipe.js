"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      console.log(models);
      Recipe.belongsToMany(models.User, { through: "UsersRecipes" });
      Recipe.hasMany(models.Ingredient);
      models.Ingredient.belongsTo(Recipe);
      Recipe.hasMany(models.Like);
      models.Like.belongsTo(Recipe);
    }
  }
  Recipe.init(
    {
      recipeName: DataTypes.STRING,
      description: DataTypes.STRING,
      instructions: DataTypes.TEXT,
      image: DataTypes.STRING,
      cookingTime: DataTypes.TIME,
      categoryId: DataTypes.INTEGER,
      numberOfLikes: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Recipe",
      tableName: "Recipes",
    }
  );
  return Recipe;
};

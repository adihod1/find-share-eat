"use strict";

const {setGlobalDBConfig} = require("../config/helpers");
module.exports = {
  async up(queryInterface, Sequelize) {
      await setGlobalDBConfig(queryInterface);
      await queryInterface.bulkInsert(
          "Ingredients",
          [
              {
                  "ingredientName": "butter",
                  "amount": 150,
                  "measurement": "grams",
                  "recipeId": 4,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "flour",
                  "amount": 260,
                  "measurement": "grams",
                  "recipeId": 4,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "almond powder",
                  "amount": 40,
                  "measurement": "grams",
                  "recipeId": 4,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sugar powder",
                  "amount": 100,
                  "measurement": "grams",
                  "recipeId": 4,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "lemon zest",
                  "amount": 1,
                  "measurement": "",
                  "recipeId": 4,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "vanilla",
                  "amount": 1,
                  "measurement": "teaspoon",
                  "recipeId": 4,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "egg",
                  "amount": 3,
                  "measurement": "",
                  "recipeId": 4,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "mascarpone",
                  "amount": 300,
                  "measurement": "grams",
                  "recipeId": 4,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sweet cream",
                  "amount": 225,
                  "measurement": "ml",
                  "recipeId": 4,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sour cream",
                  "amount": 225,
                  "measurement": "ml",
                  "recipeId": 4,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "white chocolate",
                  "amount": 200,
                  "measurement": "grams",
                  "recipeId": 4,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "butter",
                  "amount": 80,
                  "measurement": "grams",
                  "recipeId": 14,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "flour",
                  "amount": 150,
                  "measurement": "grams",
                  "recipeId": 14,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "almond powder",
                  "amount": 80,
                  "measurement": "grams",
                  "recipeId": 14,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sugar powder",
                  "amount": 40,
                  "measurement": "grams",
                  "recipeId": 14,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "lemon zest",
                  "amount": 1,
                  "measurement": "",
                  "recipeId": 14,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "vanilla",
                  "amount": 1,
                  "measurement": "teaspoon",
                  "recipeId": 14,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "egg",
                  "amount": 1,
                  "measurement": "",
                  "recipeId": 14,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "salt",
                  "amount": 1,
                  "measurement": "teaspoon",
                  "recipeId": 14,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sweet cream",
                  "amount": 50,
                  "measurement": "ml",
                  "recipeId": 14,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "apricots",
                  "amount": 12,
                  "measurement": "",
                  "recipeId": 14,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "poppy seeds",
                  "amount": 1,
                  "measurement": "tablespoon",
                  "recipeId": 14,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "apricot jam",
                  "amount": 50,
                  "measurement": "grams",
                  "recipeId": 14,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "flour",
                  "amount": 500,
                  "measurement": "grams",
                  "recipeId": 24,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "salt",
                  "amount": 10,
                  "measurement": "grams",
                  "recipeId": 24,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "salt",
                  "amount": 10,
                  "measurement": "grams",
                  "recipeId": 24,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sugar",
                  "amount": 65,
                  "measurement": "grams",
                  "recipeId": 24,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "dry yeast",
                  "amount": 1,
                  "measurement": "tablespoon",
                  "recipeId": 24,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sunflower oil",
                  "amount": 1,
                  "measurement": "cup",
                  "recipeId": 24,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "water",
                  "amount": 250,
                  "measurement": "ml",
                  "recipeId": 24,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "crushed garlic",
                  "amount": 2,
                  "measurement": "",
                  "recipeId": 24,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "chopped basil",
                  "amount": 1,
                  "measurement": "cup",
                  "recipeId": 24,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "parmesan",
                  "amount": 100,
                  "measurement": "grams",
                  "recipeId": 24,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "butter",
                  "amount": 100,
                  "measurement": "grams",
                  "recipeId": 24,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sunflower oil",
                  "amount": 1,
                  "measurement": "cup",
                  "recipeId": 24,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "butter",
                  "amount": 200,
                  "measurement": "grams",
                  "recipeId": 34,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "flour",
                  "amount": 250,
                  "measurement": "grams",
                  "recipeId": 34,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "almond powder",
                  "amount": 100,
                  "measurement": "grams",
                  "recipeId": 34,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sugar powder",
                  "amount": 100,
                  "measurement": "grams",
                  "recipeId": 34,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "lemon zest",
                  "amount": 1,
                  "measurement": "",
                  "recipeId": 34,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "vanilla",
                  "amount": 1,
                  "measurement": "teaspoon",
                  "recipeId": 34,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "egg",
                  "amount": 1,
                  "measurement": "",
                  "recipeId": 34,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "eggs",
                  "amount": 4,
                  "measurement": "",
                  "recipeId": 44,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sugar",
                  "amount": 150,
                  "measurement": "grams",
                  "recipeId": 44,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "brandy",
                  "amount": 1,
                  "measurement": "tablespoon",
                  "recipeId": 44,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "vanilla",
                  "amount": 1,
                  "measurement": "teaspoon",
                  "recipeId": 44,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "flour",
                  "amount": 100,
                  "measurement": "grams",
                  "recipeId": 44,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "dark cocoa",
                  "amount": 40,
                  "measurement": "grams",
                  "recipeId": 44,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "water",
                  "amount": 150,
                  "measurement": "ml",
                  "recipeId": 44,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "baking powder",
                  "amount": 7,
                  "measurement": "grams",
                  "recipeId": 44,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sugar",
                  "amount": 150,
                  "measurement": "grams",
                  "recipeId": 44,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "cherry liqueur",
                  "amount": 45,
                  "measurement": "ml",
                  "recipeId": 44,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "chocolate",
                  "amount": 200,
                  "measurement": "grams",
                  "recipeId": 44,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sweet cream",
                  "amount": 325,
                  "measurement": "ml",
                  "recipeId": 44,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "butter",
                  "amount": 100,
                  "measurement": "grams",
                  "recipeId": 54,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "pears",
                  "amount": 3,
                  "measurement": "",
                  "recipeId": 54,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "pears",
                  "amount": 3,
                  "measurement": "",
                  "recipeId": 54,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "eggs",
                  "amount": 2,
                  "measurement": "",
                  "recipeId": 54,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "almond powder",
                  "amount": 100,
                  "measurement": "grams",
                  "recipeId": 54,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sugar powder",
                  "amount": 100,
                  "measurement": "grams",
                  "recipeId": 54,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sugar powder",
                  "amount": 100,
                  "measurement": "grams",
                  "recipeId": 54,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "lemon zest",
                  "amount": 1,
                  "measurement": "",
                  "recipeId": 54,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "Cornflour",
                  "amount": 20,
                  "measurement": "grams",
                  "recipeId": 54,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "flour",
                  "amount": 260,
                  "measurement": "grams",
                  "recipeId": 54,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "flour",
                  "amount": 1000,
                  "measurement": "grams",
                  "recipeId": 64,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "dry yeast",
                  "amount": 1,
                  "measurement": "teaspoon",
                  "recipeId": 64,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "olive oil",
                  "amount": 2,
                  "measurement": "tablespoon",
                  "recipeId": 64,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "salt",
                  "amount": 2,
                  "measurement": "teaspoon",
                  "recipeId": 64,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "water",
                  "amount": 800,
                  "measurement": "ml",
                  "recipeId": 64,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "water",
                  "amount": 240,
                  "measurement": "ml",
                  "recipeId": 74,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "flour",
                  "amount": 600,
                  "measurement": "grams",
                  "recipeId": 74,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sugar",
                  "amount": 70,
                  "measurement": "grams",
                  "recipeId": 74,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "salt",
                  "amount": 1,
                  "measurement": "teaspoon",
                  "recipeId": 74,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "eggs",
                  "amount": 2,
                  "measurement": "",
                  "recipeId": 74,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "oil",
                  "amount": 80,
                  "measurement": "grams",
                  "recipeId": 74,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "butter",
                  "amount": 100,
                  "measurement": "grams",
                  "recipeId": 74,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "garlic cloves crushed",
                  "amount": 4,
                  "measurement": "",
                  "recipeId": 74,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "grated mozzarella cheese",
                  "amount": 400,
                  "measurement": "grams",
                  "recipeId": 74,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "rum syrup",
                  "amount": 2,
                  "measurement": "tablespoon",
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "mascarpone cream",
                  "amount": 250,
                  "measurement": "ml",
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "eggs",
                  "amount": 3,
                  "measurement": "",
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sugar",
                  "amount": 100,
                  "measurement": "grams",
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "vanilla extract",
                  "amount": 1,
                  "measurement": "teaspoon",
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "cinnamon",
                  "amount": 1,
                  "measurement": "teaspoon",
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sour cream",
                  "amount": 200,
                  "measurement": "ml",
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "oil",
                  "amount": 150,
                  "measurement": "ml",
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "flour",
                  "amount": 210,
                  "measurement": "grams",
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "almond powder",
                  "amount": 75,
                  "measurement": "grams",
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "baking powder",
                  "amount": 10,
                  "measurement": "grams",
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "dulce de leche",
                  "amount": 200,
                  "measurement": "grams",
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "caramelized hazelnuts",
                  "amount": 100,
                  "measurement": "grams",
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "banana liqueur",
                  "amount": 2,
                  "measurement": "tablespoon",
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "flour",
                  "amount": 3,
                  "measurement": "cup",
                  "recipeId": 94,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sugar",
                  "amount": 50,
                  "measurement": "grams",
                  "recipeId": 94,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "salt",
                  "amount": 1,
                  "measurement": "teaspoon",
                  "recipeId": 94,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "dry yeast",
                  "amount": 10,
                  "measurement": "grams",
                  "recipeId": 94,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "butter",
                  "amount": 250,
                  "measurement": "grams",
                  "recipeId": 94,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "milk",
                  "amount": 160,
                  "measurement": "ml",
                  "recipeId": 94,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "vanilla extract",
                  "amount": 2,
                  "measurement": "teaspoon",
                  "recipeId": 94,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "eggs",
                  "amount": 2,
                  "measurement": "teaspoon",
                  "recipeId": 94,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "cinnamon",
                  "amount": 1,
                  "measurement": "tablespoons",
                  "recipeId": 94,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "chopped natural pecans",
                  "amount": 50,
                  "measurement": "grams",
                  "recipeId": 94,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "butter",
                  "amount": 75,
                  "measurement": "grams",
                  "recipeId": 94,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "ingredientName": "sweet whipping cream",
                  "amount": 160,
                  "measurement": "ml",
                  "recipeId": 94,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              }
          ],
          {}
      );
  },

  async down(queryInterface, Sequelize) {
      await setGlobalDBConfig(queryInterface);
      await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', null, {raw: true})
      await queryInterface.bulkDelete("Ingredients", null, {truncate: true, cascade: true});
      await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', null, {raw: true})
  },
};

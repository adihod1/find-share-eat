"use strict";

const {setGlobalDBConfig} = require("../config/helpers");
module.exports = {
  async up(queryInterface, Sequelize) {
      await setGlobalDBConfig(queryInterface);
      await queryInterface.bulkInsert(
          "UsersRecipes",
          [
              {
                  "userId": 4,
                  "recipeId": 14,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "userId": 4,
                  "recipeId": 24,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "userId": 4,
                  "recipeId": 34,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "userId": 14,
                  "recipeId": 24,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "userId": 14,
                  "recipeId": 4,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "userId": 14,
                  "recipeId": 44,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "userId": 4,
                  "recipeId": 54,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "userId": 4,
                  "recipeId": 64,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "userId": 4,
                  "recipeId": 74,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "userId": 4,
                  "recipeId": 84,
                  "createdAt": new Date(),
                  "updatedAt": new Date()
              },
              {
                  "userId": 14,
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
      await queryInterface.bulkDelete("UsersRecipes", null, {truncate: true, cascade: true});
      await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', null, {raw: true})
  },
};

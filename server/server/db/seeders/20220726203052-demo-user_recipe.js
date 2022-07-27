"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UsersRecipes",
      [
        {
          userId: 1,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UsersRecipes", null, {});
  },
};

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          categoryName: "Dessert",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Appetizer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Main Dish",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

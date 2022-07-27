"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Recipes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      recipeName: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      instructions: {
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.STRING,
      },
      cookingTime: {
        type: Sequelize.TIME,
      },
      categoryId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Recipes");
  },
};

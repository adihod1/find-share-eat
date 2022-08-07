"use strict";
const {setGlobalDBConfig} = require("../config/helpers");
module.exports = {
  async up(queryInterface, Sequelize) {
    await setGlobalDBConfig(queryInterface);
    await queryInterface.createTable("Ingredients", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ingredientName: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      measurement: {
        type: Sequelize.STRING,
      },
      recipeId: {
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
    await setGlobalDBConfig(queryInterface);
    await queryInterface.dropTable("Ingredients");
  },
};

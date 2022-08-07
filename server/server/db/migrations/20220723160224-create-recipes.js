"use strict";
const {setGlobalDBConfig} = require("../config/helpers");
module.exports = {
  async up(queryInterface, Sequelize) {
    await setGlobalDBConfig(queryInterface);
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
      numberOfLikes: {
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
    await queryInterface.dropTable("Recipes");
  },
};

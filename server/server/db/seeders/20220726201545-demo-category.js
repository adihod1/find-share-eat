"use strict";

const {setGlobalDBConfig} = require("../config/helpers");
module.exports = {
  async up(queryInterface, Sequelize) {
      await setGlobalDBConfig(queryInterface);
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
      await setGlobalDBConfig(queryInterface);
      await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', null, {raw: true})
      await queryInterface.bulkDelete("Categories", null, {truncate: true, cascade: true});
      await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', null, {raw: true})
  },
};

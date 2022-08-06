"use strict";

const {setGlobalDBConfig} = require("../config/helpers");
module.exports = {
  async up(queryInterface, Sequelize) {
    await setGlobalDBConfig(queryInterface);
    await queryInterface.bulkInsert(
        "Users",
        [
          {
            firstName: "Lizzie",
            lastName: "Mcguire",
            userName: "Lizzie",
            email: "lizzie@gmail.com",
            password: "123456",
            createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Spider",
          lastName: "Man",
          userName: "spider",
          email: "spider@gmail.com",
          password: "123478",
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
      await queryInterface.bulkDelete("Users", null, {truncate: true, cascade: true});
      await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', null, {raw: true})
  },
};

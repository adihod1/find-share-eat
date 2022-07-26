"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

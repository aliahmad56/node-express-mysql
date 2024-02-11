"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "profile",
      [
        {
          firstName: "John",
          lastName: "Doe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more dummy data as needed
        {
          firstName: "ali",
          lastName: "ahmad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "profile",
      [],

      {}
    );
  },
};

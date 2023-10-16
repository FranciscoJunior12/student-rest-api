const bcryptjs = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {


    await queryInterface.bulkInsert('users',
      [
        {
          nome: 'John Doe',
          email: "john@gmail.com",
          password_hash: await bcryptjs.hash("1234", 8)
        }

      ], {});

  },

  async down() {

  }
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('fotos', {


      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,

      },

      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'

      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });

  },

  async down(queryInterface) {

    await queryInterface.dropTable('fotos');

  }
};

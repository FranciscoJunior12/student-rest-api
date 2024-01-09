import Sequelize, { Model } from "sequelize";


export default class Foto extends Model {
  static init(sequelize) {
    super.init({

      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: { 
            msg: "Campo originalName não deve ser vazio"
          }
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: "Campo não deve ser vazio"
          }
        }
      }

    }, {
      sequelize,
      tableName: 'fotos'
    });
    return this;

  }


  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
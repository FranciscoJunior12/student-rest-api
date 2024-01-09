import Sequelize, { Model } from "sequelize";


export default class Aluno extends Model {
  static init(sequelize) {
    super.init({

      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: "O nome deve ter entre 3 e 255 caracteres"
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: "E-mail já existe"
        },
        validate: {
          isEmail: {
            msg: 'email invalidado.'
          },

        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: "O sobrenome deve ter entre 3 e 255 caracteres"
          }
        }
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {

            msg: 'idade precisa ser um numero inteiro'

          }
        }
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {

            msg: 'Peso precisa ser um numero inteiro ou decimal.'
          },
        }
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'altura  precisa ser um numero inteiro'
          }

        }
      },
    }, {
      sequelize
    });
    return this;



  }

  static associate(models) {
 this.hasMany(models.Foto, )
  }
}
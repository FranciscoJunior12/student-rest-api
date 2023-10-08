import User from "../models/User";



class UserController {
  async store(req, res) {

    try {
      const novoUser = await User.create(req.body)
      const { id, nome, email } = novoUser
      return res.status(200).json({ id, nome, email });
    } catch (e) {

      return res.status(400).json({ errors: e.errors.map(erro => erro.message), })
    }

  }
  //index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users)


    } catch (e) {
      console.log(e)
      return res.status(400).json({ errors: e.errors.map(erro => erro.message) })
    }


  }
  //show
  async show(req, res) {
    try {

      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email })


    } catch (e) {
      res.status(400).json({ errors: e.errors.map(erro => erro.message), })
    }

  }
  //update
  async update(req, res) {
    try {

      if (!req.userId) return res.status(400).json({ errors: ['Missing ID'] })

      const user = await User.findByPk(req.userId);

      if (!user) return res.status(400).json({ errors: ['student not found'] })

      const studentUpdated = await user.update(req.body);

      const { id, nome, email } = studentUpdated
      return res.json({ id, nome, email })


    } catch (e) {

      res.status(400).json({ errors: e.errors.map(erro => erro.message), })
    }

  }

  //delete
  async delete(req, res) {
    try {

      // if (!req.params.id) return res.status(400).json({ errors: ['Missing ID'] })

      const user = await User.findByPk(req.userId);

      if (!user) return res.status(400).json({ errors: ['student not found'] })

      await user.destroy();

      return res.json({
        delete: true,
        msg: "user deleted sucessfully.."
      });


    } catch (e) {

      res.status(400).json({ errors: e.errors.map(erro => erro.message), })
    }

  }


}

export default new UserController(); 

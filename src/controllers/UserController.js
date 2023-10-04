import User from "../models/User";



class UserController {
  async store(req, res) {

    try {
      const novoUser = await User.create(req.body)
      return res.status(200).json(novoUser);
    } catch (e) {

      res.status(400).json({ errors: e.errors.map(erro => erro.message), })
    }

  }
  //index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users)


    } catch (e) {
      res.status(400).json({ errors: e.errors.map(erro => erro.message), })
    }


  }
  //show
  async show(req, res) {
    try {

      const user = await User.findByPk(req.params.id);
      return res.json(user)


    } catch (e) {
      res.status(400).json({ errors: e.errors.map(erro => erro.message), })
    }

  }
  //update
  async update(req, res) {
    try {

      if (!req.params.id) return res.status(400).json({ errors: ['Missing ID'] })

      const user = await User.findByPk(req.params.id);

      if (!user) return res.status(400).json({ errors: ['student not found'] })

      const studentUpdated = await user.update(req.body);

      return res.json(studentUpdated)


    } catch (e) {

      res.status(400).json({ errors: e.errors.map(erro => erro.message), })
    }

  }

  //delete
  async delete(req, res) {
    try {

      if (!req.params.id) return res.status(400).json({ errors: ['Missing ID'] })

      const user = await User.findByPk(req.params.id);

      if (!user) return res.status(400).json({ errors: ['student not found'] })

      const studentDelete = await user.destroy();

      return res.json(studentDelete);


    } catch (e) {

      res.status(400).json({ errors: e.errors.map(erro => erro.message), })
    }

  }


}

export default new UserController(); 

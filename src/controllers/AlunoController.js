import Aluno from "../models/Aluno";



class AlunoController {

  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.status(200).json(alunos);
  }



  async show(req, res) {
    try {

      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: "missing Id"
        })
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: "Aluno não existe"
        })
      }


      return res.status(200).json(aluno)
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(err => err.message) })
    }
  }




  async store(req, res) {


    try {
      console.log(req.body)
      const aluno = await Aluno.create(req.body)
      // console.log(aluno)

      return res.status(200).json(aluno)
    } catch (e) {
      return res.status(400).json({ errors: e })
    }
  }
  async update(req, res) {
    try {

      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: "missing Id"
        })
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: "Aluno não existe"
        })
      }


      const alunoActulizado = await aluno.update(req.body)

      return res.json(alunoActulizado);

    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(err => err.message) })
    }
  }
  async delete(req, res) {
    try {

      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: "missing Id"
        })
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: "Aluno não existe"
        })
      }

      await aluno.destroy();
      return res.status(200).json({
        removido: true
      });


    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(err => err.message) })
    }
  }
}

export default new AlunoController();

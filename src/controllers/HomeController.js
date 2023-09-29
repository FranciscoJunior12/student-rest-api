import Aluno from "../models/aluno";



class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Francisco',
      sobrenome: 'Junior',
      email: "",
      idade: 21,
      peso: 76,
      altura: 1.75

    })
    res.status(200).json(novoAluno);
  }
}

export default new HomeController();

import User from "./classes-javascript.js";


export default class Admin extends User {
    constructor(nome, email, nascimento, rp = 'admin', ativo = true){
        //super classe é classe ques esta fornecendo os parâmetros para outra classe herdar.
        super(nome, email, nascimento, rp, ativo )
    }
    nomeAdmin(){
        return `${this.nome}`
    }

    criarCurso(nomeDoCurso, vagas){
        return`Curso de ${nomeDoCurso}  com ${vagas}`
    }
}

const novoAdmin = new Admin ('Lucas', 'l@l.com', '2020-03-03');

console.log(novoAdmin.criarCurso('Psicologia', '30 vagas'))
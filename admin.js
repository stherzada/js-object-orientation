import User from "./classes-javascript.js";


export default class Admin extends User {
    constructor(nome, email, nascimento, rp = 'admin', ativo = true){
        //super classe é classe ques esta fornecendo os parâmetros para outra classe herdar.
        super(nome, email, nascimento, rp, ativo )
    }
    
    //assinatura seria os parametros que um método recebe
    exibirInfos(){
        return`${this.nome}, ${this.email}, ${this.nascimento}`
       }

    criarCurso(nomeDoCurso, vagas){
        return`Curso de ${nomeDoCurso}  com ${vagas}`
    }
}

const novoAdmin = new Admin ('Lucas', 'l@l.com', '2020-03-03');

// console.log(novoAdmin.criarCurso('Psicologia', '30 vagas'))
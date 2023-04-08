import User from "./classes-javascript.js";


export default class Docente extends User {
    constructor(nome, email, nascimento, rp = 'Docente', ativo = true){
        super(nome, email, nascimento, rp, ativo)
    }

    aprovaEstudante(estudante, curso){
        return `Estudante ${estudante} aprovado no curso ${curso}`
    }
}

const novoDocente = new Docente('Sther', 'o@o.com', '2020-03-01')

console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Sther', 'Psicologia'))
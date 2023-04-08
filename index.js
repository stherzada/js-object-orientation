import User from "./classes-javascript.js";
import Docente from "./docente.js";
import Admin from "./admin.js"



// const novoUser = new User ('Sther', 's@s.com', '2023-01-01');
// console.log(novoUser.exibirInfos())

const novoAdmin = new Admin ('Guilherme', 'o@o.com', '2002-02-02')
console.log(novoAdmin.exibirInfos())

console.log(novoAdmin.nome)
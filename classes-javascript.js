export default class User {
   #nome
   #email
   #nascimento
   #rp
   #ativo
   constructor(nome, email, nascimento, rp, ativo = true){
    this.#nome = nome
    this.#email = email
    this.#nascimento = nascimento
    this.#rp = rp || 'estudante'
    this.#ativo = ativo
   }

   exibirInfos(){
    return`${this.#nome}, ${this.email}, ${this.nascimento}`
   }
};




// const novoUser = new User ('Sther', 's@s.com', '2001-13-02')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// //Ou seja, por baixo da classe user, temos uma propriedade prototype, que além de tudo foi passada pela cadeia de protótipo, para dentro de novoUser, mesmo usando a sintaxe de classe, e mesmo criando, instanciando através do construtor, através de uma nova classe.
// console.log(User.prototype.isPrototypeOf(novoUser))
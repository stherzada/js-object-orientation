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
   //pegar informação
   get nome(){
      return this.#nome
   }
   get email(){
      return this.#email
   }
   get nascimento(){
      return this.#nascimento
   }
   get rp(){
      return this.#rp
   }
   get ativo(){
      return this.#ativo
   }


   // esse objeto que é feito para acessar as propiedades privadas de uma classe
   // #montaObjUser(){
   //    return({
   //       nome: this.#nome,
   //       email: this.#email,
   //       nascimento: this.#nascimento,
   //       rp: this.#rp,
   //       ativo: this.#ativo
   //    })
   // }

   exibirInfos(){
   const objUser = this.#montaObjUser()

    return`${objUser.nome}, ${objUser.email}, ${objUser.nascimento}`
   }
};




// const novoUser = new User ('Sther', 's@s.com', '2001-13-02')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// //Ou seja, por baixo da classe user, temos uma propriedade prototype, que além de tudo foi passada pela cadeia de protótipo, para dentro de novoUser, mesmo usando a sintaxe de classe, e mesmo criando, instanciando através do construtor, através de uma nova classe.
// console.log(User.prototype.isPrototypeOf(novoUser))
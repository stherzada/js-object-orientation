function User(nome, email){
    this.nome = nome,
    this.email = email,

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}
// esse aqui é utilizando um construtor.
// const novoUser = new User('Juliana', 'o@o.com')
// console.log(novoUser.exibirInfos())

// function Admin(rp){
//     User.call(this, 'Sther', 's@s.com')
//     this.rp = rp || 'estudante'
//     //Então, se receber role, ele vai atribuir role, o que foi passado por parâmetro para a propriedade, ou senão vai ser por padrão estudante.
// }


// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.rp)

const user ={
    init:function(nome, email){
        this.nome = nome
        this.email = email
    },

    exibirInfos:function(nome){
        return nome
    }
}
//estou fazendo sem a função construtora
const novoUser = Object.create(user)
novoUser.init('Sther', 's@s.com')
console.log(novoUser.exibirInfos('Sther'))










// console.log(user.isPrototypeOf(novoUser))

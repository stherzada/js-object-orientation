const user = {
    nome: "Sther",
    email:"pipipopo@gmail.com",
    nascimento:"14/03/2001",
    rp:"admin",
    ativo: true,

    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
};

// user.exibirInfos();

// // const exibir = user.exibirInfos
// exibir()


const exibir = function(){
    console.log(this.nome)
};
//                       prendi.
const exibirNome=exibir.bind(user);
exibirNome();
exibir();

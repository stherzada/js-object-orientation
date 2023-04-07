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

const admin = {
    nome: "Lucas",
    email: "m@m.com",
    rp:"admin",
    criarCurso(){
        console.log('curso criado :)')
    }
}
//prototipo.
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()


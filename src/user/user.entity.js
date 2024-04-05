class User{
    constructor(id, cpf, nome, email, senha, dataNascimento){
        this.id = id;
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
    }
}

module.exports = User;
class UserDTO {
    constructor({ id, cpf, nome, email, senha, dataNascimento }, criar = false) {
        this.setId(id);
        this.setCpf(cpf);
        this.setNome(nome);
        this.setEmail(email);
        this.dataNascimento = dataNascimento;
        if (criar) {
            this.setSenha(senha);
        } else {
            this.senha = senha;
        }
    }

    // validar id
    setId(id) {
        if (!id) throw new Error("Precisa de um ID!");
        this.id = id;
    }

    // Validação formato do e-mail
    setEmail(email) {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) throw new Error("Formato de e-mail inválido!");
        this.email = email;
    }

    // Validações de senha
    // senha deve ter o tamanho minimo de 8 caracteres
    // senha deve conter uma letra maiuscula 
    // senha deve conter uma letra minuscula 
    // senha deve conter um numero 
    // senha deve conter um caracter especial 
    setSenha(senha) {
        const conterCarEsp = /[!@#$%^&*]/;
        if (senha.length > 5 && senha.length < 20)
            throw new Error("A senha deve ter entre 6 e 18 caracteres");
        if (!/[A-Z]/.test(senha))
            throw new Error("A senha precisa conter pelo menos uma letra maiuscula");
        if (!/[a-z]/.test(senha))
            throw new Error("A senha precisa conter pelo menos uma letra minuscula");
        if (!/\d/.test(senha))
            throw new Error("A senha deve conter pelo menos um numero");
        if (!conterCarEsp.test(senha))
            throw new Error("A senha precisa conter pelo menos um caractere especial (!@#$%^&*)");
        this.senha = senha;
    }

    // Validação formato do nome /// maior que 2, menor que 31 caracteres
    // maior que 2 caractesres e menor que 30
    setNome(nome) {
        if (!/[A-Z]/.test(nome))
            throw new Error("Preencha seu nome com letras");
        if (!nome.length > 2 && !nome.length < 31)
            throw new Error("O nome precisa ter entre 3 e 30 caracteres");
        this.nome = nome;
    }

    // Validação formato do cpf /// cpf precisa ter 11 numeros
    setCpf(cpf) {
        if (!/\d/.test(cpf))
            throw new Error("Digite apenas numeros");
        // maior que 2 caractesres e menor que 30
        if (cpf.length !== 11)
            throw new Error("O cpf precisa ter 11 digitos");
        this.cpf = cpf;
    }

}

module.exports = UserDTO;

// TODO nome esta passando mesmo com 1 caractere
// TODo senha esta passando mesmo sem numeros
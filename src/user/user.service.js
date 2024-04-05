const { v4: uuidv4 } = require("uuid");
const User = require("./user.entity.js");
const UserDTO = require("./user.dto.js");
// const { GenericException } = require("../generic-exception.js");

const users = [
    {
        id: uuidv4(),
        cpf: "12345678901",
        nome: "Paulo Eduardo",
        email: "paulo@gmail.com",
        password: "Paulo@123",
        dataNascimento: "01/01/2001",
    },
    // {
    //     id: uuidv4(),
    //     cpf: "98765432101",
    //     nome: "Maria Eduarda",
    //     email: "maria@gmail.com",
    //     password: "Maria@123",
    //     dataNascimento: "03/05/2002",
    // },
];

class UserService {
    findAll() {
        return users.map((user) => new UserDTO(user));
    }

    findOne(id) {
        return users.find((user) => user.id === id);
    }

    create(UserDTO) {
        users.push(UserDTO);
        return UserDTO;
    }

    update(UserDTO) {
        const userIndex = users.findIndex((user) => user.id === UserDTO.id);
        if (userIndex === -1) return null;
        const updatedUser = UserDTO;
        users[userIndex] = updatedUser;
        return updatedUser;
    }
    remove(id) {
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex === -1) return false;
        users.splice(userIndex, 1);
        return true;
    }

}

module.exports = UserService;
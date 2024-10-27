
const userRepository = require('../repository/user_repository')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')






function login(user){
    if(!user || !user.cpf || !user.password) {
        return
    }
    let userCpf = userRepository.getUserbyCpf(user.cpf)
    let isValidPassword = bcrypt.compareSync(user.password, userCpf.password)

    if(userCpf.cpf === user.cpf && isValidPassword == true) {

        const payload = { id: userCpf.id, cpf: userCpf.cpf };
        const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1h'})
        // const token = jwt.sign(payload, JWT_KEY, { expiresIn: '1h'})
        throw {id: 201, msg: token}
    } else {
        throw { id: 401, msg: "Usuario ou senha inválidos" } 
    }
}

function verifyToken(token) {
    try {
        const payload = jwt.verify(token, PALAVRA_CHAVE);
        console.log("Payload", payload);
    } catch (err) {
        console.log("Erro no Token", err)
        throw  { id: 401, msg: "Token Inválido!" }
    }
}

module.exports = {
    login,
    verifyToken
}
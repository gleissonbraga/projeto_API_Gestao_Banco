
const userRepository = require('../repository/user_repository')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

function login(user){
    if(!user || !user.cpf || !user.password) {
        return
    }
    let userCpf = userRepository.getUserbyCpf(user.cpf)
    
    if(!userCpf){
        throw {id: 404, msg: "Usuário não existe"}
    }
    
    let isValidPassword = bcrypt.compareSync(user.password, userCpf.password)
    if(isValidPassword == true) {

        const payload = {name: userCpf.name, account: userCpf.account, cpf: userCpf.cpf };
        const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1h'})
        throw {id: 201, msg: token}
    } else {
        throw { id: 401, msg: "Usuario ou senha inválidos" } 
    }
}


function verifyToken(token) {
    try {
        const payload = jwt.verify(token, process.env.JWT_KEY);
        console.log("Payload", payload);
        return payload
    } catch (error) {
        throw  { id: 401, msg: "Token Inválido!" }
    }
}

module.exports = {
    login,
    verifyToken
}
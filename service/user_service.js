const userRepository = require('../repository/user_repository')

function showUsers(){
    return userRepository.showUsers()
}

function createdUser(user) {
    if(user && user.name && user.cpf && user.password){
        return userRepository.createdUser(user)
    } else {
        throw {id: 400, msg: "Usuário com dados incorretos"}
    }
}

function findUser(id){
    let user = userRepository.findUser(id)
    if(user) {
        return user
    } else {
        throw {id: 404, msg: "Usuário não encontrado!"}
    }
}

function updateUser(user, id){
    if(user && user.name && user.cpf && user.password) {
        const userUpdate = userRepository.updateUser(user, id)
        if(userUpdate) {
            return userUpdate
        } else {
            throw { id: 404, msg: "Produto não encontrado"}
        }
    } else {
        throw { id: 404, msg: "Dados incorretos"}
    }
}


function deleteUser(id){
    let user = userRepository.deleteUser(id)
    if(user){
        return user
    } else {
        throw { id: 404, msg: "Usuário não encontrado"}
    }
}


module.exports = {
    showUsers,
    createdUser,
    findUser,
    updateUser,
    deleteUser
}
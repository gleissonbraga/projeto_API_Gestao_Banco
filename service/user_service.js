const user_repository = require('../repository/user_repository')

function showUsers(){
    return user_repository.showUsers()
}

function createdUser(user) {
    if(user && user.name && user.cpf && user.password){
        return user_repository.createdUser(user)
    } else {
        throw {id: 400, msg: "Usuário com dados incorretos"}
    }
}


module.exports = {
    showUsers,
    createdUser

}
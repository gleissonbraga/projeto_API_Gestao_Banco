const accountRepository = require('./account_repository')
const bcrypt = require('bcrypt')


let listUser = []




let idGenerator = 1
const accountGenerator = () => Math.floor(100000000 + Math.random() * 900000000)


function showUsers(){
    return listUser.map(({ password, ...userWithoutPassword }) => userWithoutPassword);
}

function createdUser(user){
    if(!user.name || !user.cpf || !user.password) {
        return
    }
    const criptPassword = bcrypt.hashSync(user.password, 10)
    user.password = criptPassword

    user.id = idGenerator++
    user.account = accountGenerator()
    listUser.push(user)
    accountRepository.createdAccount(user)
    return user

    // Caso eu queira retirar a senha criptografada no retorno do json
    // const userWithoutPassword = { ...user };
    // delete userWithoutPassword.password;
    // return userWithoutPassword;
}

function findUser(id){
    return listUser.find(user => user.id == id)
}

function updateUser(user, id) {
    if(!user.name || !user.cpf || !user.password) {
        return
    }

    const criptPassword = bcrypt.hashSync(user.password, 10)
    user.password = criptPassword

    let indiceUser = listUser.findIndex(user => user.id == id)
    if(indiceUser == -1) return
    user.id = id
    user.account = listUser[indiceUser].account
    listUser[indiceUser] = user
    return user
}

function deleteUser(id) {
    const indiceUser = listUser.findIndex(user => user.id == id)
    if(indiceUser == -1) return
    return (listUser.splice(indiceUser, 1))[0];
}

function getUserbyCpf(cpf){
    return listUser.find(user => user.cpf === cpf)
}

module.exports = {
   showUsers, createdUser, findUser, deleteUser, updateUser, getUserbyCpf
}




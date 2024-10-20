let listUser = []
let idGenerator = 1


function showUsers(){
    return listUser
}

function createdUser(user){
    if(!user.name || !user.cpf || !user.password) {
        return
    }
    user.id = idGenerator++
    listUser.push(user)
    return user
}

function findUser(id){
    return listUser.find(user => user.id == id)
}

function updateUser(user, id) {
    if(!user.name, user.cpf, user.password) {
        return
    }

    let indiceUser = listUser.findIndex(user => user.id == id)
    
    if(indiceUser == -1) return

    user.id = id
    listUser[indiceUser] = user
    return user
}

function deleteUser(id) {
    const indiceUser = listUser.findIndex(user => user.id == id)
    if(indiceUser == -1) return
    return (listUser.splice(indiceUser, 1))[0];
}

module.exports = {
   showUsers, createdUser, findUser, deleteUser, updateUser
}
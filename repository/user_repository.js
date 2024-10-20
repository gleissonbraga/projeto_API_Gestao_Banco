let listUser = []
let idGenerator = []


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
    return (listUser.find(user => {
        user.id == id
    }))
}

module.exports = {
   showUsers, createdUser, findUser
}
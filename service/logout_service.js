function logout(){
    try {
        localStorage.removeItem("token")
        throw  { id: 200, msg: "Você saiu!" }
    } catch (error) {
        throw  { id: 401, msg: "Você não esta logado" }
    }
}


module.exports = {
    logout
}
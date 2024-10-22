const user_repository = require("../repository/user_repository")
const user_service = require("../service/user_service")

function showUsers(req, res) {
   res.json(user_service.showUsers())
}

function createdUser(req, res){
    const user = req.body
    try {
        res.json(user_service.createdUser(user))
    } catch (error) {
        res.status(error.id).json(error)
    }
}

function findUser(req, res) {
    const id = req.params.id
    res.json(user_repository.findUser(id))
}

function deleteUser(req, res) {
    const id = req.params.id
    res.json(user_repository.deleteUser(id))
}

function updateUser(req, res) {
    const id = req.params.id
    const user = req.body
    res.json(user_repository.updateUser(user, id))
}

module.exports = {
    showUsers,
    createdUser,
    findUser,
    deleteUser,
    updateUser
}
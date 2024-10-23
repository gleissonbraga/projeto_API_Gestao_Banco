const userService = require("../service/user_service")

function showUsers(req, res) {
   res.json(userService.showUsers())
}

function createdUser(req, res){
    const user = req.body
    try {
        res.json(userService.createdUser(user))
    } catch (error) {
        res.status(error.id).json(error)
    }
}

function findUser(req, res) {
    const id = req.params.id
    try {
        res.json(userService.findUser(id))
    } catch (error) {
        res.status(error.id).json(error)
    }
}

function deleteUser(req, res) {
    const id = req.params.id
    try {
        res.json(userService.deleteUser(id))
    } catch (error) {
        res.status(error.id).json(error)
    }
}

function updateUser(req, res) {
    const id = req.params.id
    const user = req.body
    try {
        res.json(userService.updateUser(user, id))
    } catch (error) {
        res.status(error.id).json(error)
    }
    
}

module.exports = {
    showUsers,
    createdUser,
    findUser,
    deleteUser,
    updateUser
}
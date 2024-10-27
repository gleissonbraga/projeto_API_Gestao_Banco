const loginService = require('../service/login_service')

function login(req, res){
    const userLogin = req.body
    try {
        res.json(loginService.login(userLogin))
    } catch (error) {
        res.status(error.id).json(error)
    }
}

module.exports = {
    login
}
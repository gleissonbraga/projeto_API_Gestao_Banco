const logoutService = require('../service/logout_service')

function logout(req, res){
    try {
        res.json(logoutService.logout())
    } catch (error) {
        res.status(error.id).json(error)
    }
}



module.exports = {
    logout
}
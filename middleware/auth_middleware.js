const loginService = require("../service/login_service")

function verifyAccess(req, res, next){
    try {
        const token = req.get("token")
        loginService.verifyToken(token)
        next()
    } catch (error) {
        res.status(error.id).json(error);
    }
}

module.exports = {
    verifyAccess
}
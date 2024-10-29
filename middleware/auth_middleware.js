const loginService = require("../service/login_service")

function verifyAccess(req, res, next){
    try {
        const token = req.get("token")
        const payload = loginService.verifyToken(token)
        req.payload = payload
        next()
    } catch (error) {
        res.status(error.id).json(error);
    }
}

module.exports = {
    verifyAccess
}


        // const user = loginService.verifyToken(token);
        // req.user = user; // Armazena o usuário decodificado no req
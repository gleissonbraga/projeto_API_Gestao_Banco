const user_controller = require("../controller/user_controller")

const express = require('express')
const router = express.Router();


router.get('/', user_controller.showUsers)
router.post('/cadastrar', user_controller.createdUser)
router.get('/buscar/:id', user_controller.findUser)
router.get('/deletar/:id', user_controller.deleteUser)
router.get('/atualizar/:id', user_controller.updateUser)


module.exports = router


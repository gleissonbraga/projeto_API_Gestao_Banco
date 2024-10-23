const user_controller = require("../controller/user_controller")

const express = require('express')
const router = express.Router();


router.get('/', user_controller.showUsers)
router.post('/cadastrar', user_controller.createdUser)
router.get('/buscar/:id', user_controller.findUser)
router.post('/deletar/:id', user_controller.deleteUser)
router.post('/atualizar/:id', user_controller.updateUser)


module.exports = router


const user_controller = require("../controller/user_controller")

const express = require('express')
const router = express.Router();


router.get('/', user_controller.showUsers)

router.get('/buscar/:id', user_controller.findUser)
router.delete('/deletar/:id', user_controller.deleteUser)
router.put('/atualizar/:id', user_controller.updateUser)


module.exports = router


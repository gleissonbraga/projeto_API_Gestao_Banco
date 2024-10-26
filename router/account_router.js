const accountController = require("../controller/account_controller")

const express = require('express')
const router = express.Router();



router.post('/depositar/:conta', accountController.depositMoney)
router.post('/sacar/:conta', accountController.withdrawMoney)
router.post('/pix/:conta', accountController.sendPix)
router.get('/saldo/:conta', accountController.showBalance)


module.exports = router

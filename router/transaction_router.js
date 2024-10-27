const transactionController = require('../controller/transaction_controller')

const express = require('express')
const router = express.Router();


router.get('/deposito/:conta', transactionController.findATransactionDeposit)
router.get('/saque/:conta', transactionController.findATransactionWithdraw)
router.get('/pix/:conta', transactionController.findATransactionPix)
router.get('/todos/depositos/:conta', transactionController.findAllTransactionDeposit)
router.get('/todos/saques/:conta', transactionController.findAllTransactionWithdraw)
router.get('/todos/pix/:conta', transactionController.findAllTransactionPix)


module.exports = router
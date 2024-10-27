const transactionService = require("../service/transaction_service")


function findATransactionDeposit(req, res){
    const account = req.params.conta
    const date = req.body.transactionDate
    try {
        res.json(transactionService.findATransactionDeposit(account, date))
    } catch (error) {
        res.status(error.id).json(error)
    }
}

function findATransactionWithdraw(req, res){
    const account = req.params.conta
    const date = req.body.transactionDate
    try {
        res.json(transactionService.findATransactionWithdraw(account, date))
    } catch (error) {
        res.status(error.id).json(error)
    }
}

function findATransactionPix(req, res){
    const account = req.params.conta
    const date = req.body.transactionDate
    try {
        res.json(transactionService.findATransactionPix(account, date))
    } catch (error) {
        res.status(error.id).json(error)
    }
}

function findAllTransactionDeposit(req, res){
    const account = req.params.conta
    try {
        res.json(transactionService.findAllTransactionDeposit(account))
    } catch (error) {
        res.status(error.id).json(error)
    }
}

function findAllTransactionWithdraw(req, res){
    const account = req.params.conta
    try {
        res.json(transactionService.findAllTransactionWithdraw(account))
    } catch (error) {
        res.status(error.id).json(error)
    }
}

function findAllTransactionPix(req, res){
    const account = req.params.conta
    try {
        res.json(transactionService.findAllTransactionPix(account))
    } catch (error) {
        res.status(error.id).json(error)
    }
}


module.exports = {
    findATransactionDeposit,
    findATransactionWithdraw,
    findATransactionPix,
    findAllTransactionDeposit,
    findAllTransactionWithdraw,
    findAllTransactionPix
}
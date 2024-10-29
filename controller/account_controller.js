const accountService = require("../service/account_service")

function showBalance(req, res){
    let conta = req.params.conta
    try {
        res.json(accountService.showBalance(conta))
    } catch (error) {
        res.status(error.id).json(error)
    }
}



function depositMoney(req, res){
    const value = req.body.balance
    const accountBank = req.params.conta
    const user_account = req.payload.account
    try {
        res.json(accountService.depositMoney(accountBank, value, user_account))
    } catch (error) {
        res.status(error.id).json(error)
    }
}

function withdrawMoney(req, res){
    const value = req.body.balance
    const accountBank = req.params.conta
    const user_account = req.payload.account
    try {
        res.json(accountService.withdrawMoney(accountBank, value, user_account))
    } catch (error) {
        res.status(error.id).json(error)
    }
    
}

function sendPix(req, res){
    const value = req.body.balance
    const accountBank = req.params.conta
    try {
        res.json(accountService.sendPix(accountBank, value))
    } catch (error) {
        res.status(error.id).json(error)
    }
}

module.exports = {
    showBalance,
    withdrawMoney,
    depositMoney,
    sendPix
}
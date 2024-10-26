const accountRepository = require("../repository/account_repository")

function showBalance(accountBank){
    let userBalance = accountRepository.showBalance(accountBank)
    if(userBalance) {
        throw {id: 200, msg: `Saldo R$ ${userBalance}`}
    } else {
        throw {id: 404, msg: "Conta não encontrada"}
    }
}

function depositMoney(accountBank, value) {
    let valueDeposit = accountRepository.depositMoney(accountBank, value)
    if(valueDeposit) {
        throw {id: 200, msg: "Depósito realizado"}
    } else {
        throw {id: 404, msg: "Esta conta não existe ou o valor inserido é inválido"}
    }
}


function withdrawMoney(accountBank, value){
    let valueWithdraw = accountRepository.withdrawMoney(accountBank, value)
    if(valueWithdraw == true){
        throw {id: 200, msg: "Saque realizado"}
    } else {
        throw {id: 422, msg: `Saldo insuficiente. Valor R$ ${deposit.balance}`}
    }
}

module.exports = {
    withdrawMoney,
    depositMoney,
    showBalance
}
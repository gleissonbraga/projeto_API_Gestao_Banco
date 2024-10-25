const accountRepository = require("../repository/account_repository")

function showBalance(accountBank){
    let userBalance = accountRepository.showBalance(accountBank)
    if(userBalance) {
        throw {id: 200, msg: `Saldo R$ ${userBalance}`}
    } else {
        throw {id: 404, msg: "Conta não encontrada"}
    }
}


function withdrawMoney(accountBank, value){
    let deposit = accountRepository.withdrawMoney(accountBank, value)
    if(deposit == true){
        throw {id: 200, msg: "Saque realizado"}
    } else {
        throw {id: 422, msg: `Saldo insuficiente. Valor R$ ${deposit.balance}`}
    }
}

module.exports = {
    withdrawMoney,
    showBalance
}
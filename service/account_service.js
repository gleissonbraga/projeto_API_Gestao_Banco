const accountRepository = require("../repository/account_repository")

function showBalance(accountBank){
    let userBalance = accountRepository.showBalance(accountBank)
    if(userBalance == undefined){
        throw {id: 404, msg: "Conta não encontrada"}
    } else {
        throw {id: 200, msg: `Saldo R$ ${userBalance}`}
    }
}

// ajustar status code
function depositMoney(accountBank, value) {
    let valueDeposit = accountRepository.depositMoney(accountBank, value)
    if(valueDeposit == undefined){
        throw {id: 404, msg: "Esta conta não existe!"}
    } else {
        if(valueDeposit) {
            throw {id: 200, msg: "Depósito realizado"}
        } else {
            throw {id: 404, msg: "O valor inserido é inválido"}
        }
    }
}

// refatorar metodo de lançamento de status (devido a não ter usuário o deposit.balance da erro)
function withdrawMoney(accountBank, value){
    let valueWithdraw = accountRepository.withdrawMoney(accountBank, value)
    if(valueWithdraw == undefined){
        throw {id: 404, msg: "Esta conta não existe!"}
    } else {
        if(valueWithdraw == true){
            throw {id: 200, msg: "Saque realizado"}
        } else {
            throw {id: 422, msg: `Saldo insuficiente. Valor R$ ${valueWithdraw.balance}`}
        }
    }
}


function sendPix(accountBank, value) {
    let userReceived = accountRepository.sendPix(accountBank, value)
    if(userReceived){
        throw {id: 200, msg: `Seu pix foi enviado para ${userReceived.name} no valor de R$ ${userReceived.valuePix}`}
    } else {
        throw {id: 404, msg: "Esta conta não existe!"}
    }
}

module.exports = {
    withdrawMoney,
    depositMoney,
    showBalance,
    sendPix
}
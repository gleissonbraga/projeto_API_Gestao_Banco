const transactionRepository = require("../repository/transaction_repository")


function findATransactionDeposit(account, date){
    let deposit = transactionRepository.findATransactionDeposit(account, date)
    if (deposit == undefined){
        throw {id: 400, msg: "Transação não encontrada."}
    } else {
        return {id: 200, deposit}
    }
}

function findATransactionWithdraw(account, date){
    let withdraw = transactionRepository.findATransactionWithdraw(account, date)
    if (withdraw == undefined){
        throw {id: 400, msg: "Transação não encontrada."}
    } else {
        return {id: 200, withdraw}
    }
}

function findATransactionPix(account, date){
    let pix = transactionRepository.findATransactionPix(account, date)
    if (pix == undefined){
        throw {id: 400, msg: "Transação não encontrada."}
    } else {
        return {id: 200, pix}
    }
}

function findAllTransactionDeposit(account){
    let allDeposits = transactionRepository.findAllTransactionDeposit(account)
    if(allDeposits == undefined){
        throw {id: 400, msg: "Transações não encontradas."}
    } else {
        return allDeposits
    }
}

function findAllTransactionWithdraw(account){
    let allWithdraws = transactionRepository.findAllTransactionWithdraw(account)
    if(allWithdraws == undefined){
        throw {id: 400, msg: "Transações não encontradas."}
    } else {
        throw {id: 200, allWithdraws}
    }
}

function findAllTransactionPix(account){
    let allPix = transactionRepository.findAllTransactionPix(account)
    if(allPix == undefined){
        throw {id: 200, allPix}
    } else {
        throw {id: 400, msg: "Transações não encontradas."}
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
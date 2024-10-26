const { format } = require('date-fns');

let listTransactionsDeposit = []
let listTransactionsWithdrawal = []
let listTransactionsPix = []


function showTransactionDeposit(){
    return listTransactionsDeposit
}

function showTransactionWithdrawal(){
    return listTransactionsWithdrawal
}

function showTransactionPix(){
    return listTransactionsPix
}


function createdDepositReceipt(account, value){
    listTransactionsDeposit.push({
        name: account.name,
        cpf: account.cpf,
        account: account.account,
        valor: value,
        transactionDate: format(new Date(),'dd/MM/yyyy')
    })
}

function createdWithdrawalReceipt(account, value){
    listTransactionsWithdrawal.push({
        name: account.name,
        cpf: account.cpf,
        account: account.account,
        valor: value,
        transactionDate: format(new Date(),'dd/MM/yyyy')
    })
}

function createdDepositPix(account, value) {
    listTransactionsPix.push({
        name: account.name,
        cpf: account.cpf,
        account: account.account,
        valor: value,
        transactionDate: format(new Date(),'dd/MM/yyyy')
    })
}


module.exports = {
    showTransactionDeposit,
    showTransactionWithdrawal,
    showTransactionPix,
    createdDepositReceipt,
    createdWithdrawalReceipt,
    createdDepositPix
}
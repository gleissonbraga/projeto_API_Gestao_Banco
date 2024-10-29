const { format } = require('date-fns');

let listTransactionsDeposit = []
let listTransactionsWithdrawal = []
let listTransactionsPix = []


function createdDepositReceipt(account, value){
    listTransactionsDeposit.push({
        transaction: "Depósito",
        name: account.name,
        cpf: account.cpf,
        account: account.account,
        valueDeposit: value,
        transactionDate: format(new Date(),'dd/MM/yyyy'),
        hours: format(new Date(), 'HH:mm')
    })
}

function createdWithdrawalReceipt(account, value){
    listTransactionsWithdrawal.push({
        transaction: "Saque",
        name: account.name,
        cpf: account.cpf,
        account: account.account,
        valueWithdraw: value,
        transactionDate: format(new Date(),'dd/MM/yyyy'),
        hours: format(new Date(), 'HH:mm')
    })
}

function createdDepositPix(account, value) {
    listTransactionsPix.push({
        transaction: "Pix",
        name: account.name,
        cpf: account.cpf,
        account: account.account,
        valuePix: value,
        transactionDate: format(new Date(),'dd/MM/yyyy'),
        hours: format(new Date(), 'HH:mm')
    })
}

function findATransactionDeposit(account, date){
    if(!account || !date) return
    const findDateandAccount = listTransactionsDeposit.filter(dep => dep.account == account && dep.transactionDate == date)
    if(findDateandAccount.length > 0) {
        return findDateandAccount
    } else {
        return undefined
    }
}


function findATransactionWithdraw(account, date){
    if(!account || !date) return
    const findDateandAccount = listTransactionsWithdrawal.filter(dep => dep.account == account && dep.transactionDate == date)
    if(findDateandAccount.length > 0) {
        return findDateandAccount
    } else {
        return undefined
    }
}


function findATransactionPix(account, date){
    if(!account || !date) return
    const findDateandAccount = listTransactionsPix.filter(dep => dep.account == account && dep.transactionDate == date)
    if(findDateandAccount.length > 0) {
        return findDateandAccount
    } else {
        return undefined
    }
}

function findAllTransactionDeposit(account){
    if(!account) return
    const findAccount = listTransactionsDeposit.filter(dep => dep.account == account)
    if(findAccount.length > 0) {
        return findAccount
    } else {
        return undefined
    }
}



function findAllTransactionWithdraw(account){
    if(!account) return
    const findAccount = listTransactionsWithdrawal.filter(dep => dep.account == account)
    if(findAccount.length > 0) {
        return findAccount
    } else {
        return undefined
    }
}


function findAllTransactionPix(account){
    if(!account) return
    const findAccount = listTransactionsPix.filter(dep => dep.account == account)
    if(findAccount.length > 0) {
        return findAccount
    } else {
        return undefined
    }
}



module.exports = {
    createdDepositReceipt,
    createdWithdrawalReceipt,
    createdDepositPix,
    findATransactionDeposit,
    findATransactionWithdraw,
    findATransactionPix,
    findAllTransactionDeposit,
    findAllTransactionWithdraw,
    findAllTransactionPix
}
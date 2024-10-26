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
        valor: value,
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
        valor: value,
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
        valor: value,
        transactionDate: format(new Date(),'dd/MM/yyyy'),
        hours: format(new Date(), 'HH:mm')
    })
}

function findATransactionDeposit(account, date){
    if(!account || !date) return
    const findAccount = listTransactionsDeposit.findIndex(dep => dep.account == account)
    const findDate = listTransactionsDeposit.findIndex(dep => dep.transactionDate == date)
    if(findAccount == undefined || findDate == undefined) {
        return undefined
    } else {
        if(findAccount !== -1 && findDate !== -1 && findAccount === findDate){
            return listTransactionsDeposit[findAccount]
        }
    }
}

function findATransactionWithdraw(account, date){
    if(!account || !date) return
    const findAccount = listTransactionsWithdrawal.findIndex(dep => dep.account == account)
    const findDate = listTransactionsWithdrawal.findIndex(dep => dep.transactionDate == date)
    if(findAccount == undefined || findDate == undefined) {
        return undefined
    } else {
        if(findAccount !== -1 && findDate !== -1 && findAccount === findDate){
            return listTransactionsWithdrawal[findAccount]
        }
    }
}

function findATransactionPix(account, date){
    if(!account || !date) return
    const findAccount = listTransactionsPix.findIndex(dep => dep.account == account)
    const findDate = listTransactionsPix.findIndex(dep => dep.transactionDate == date)
    if(findAccount == undefined || findDate == undefined) {
        return undefined
    } else {
        if(findAccount !== -1 && findDate !== -1 && findAccount === findDate){
            return listTransactionsPix[findAccount]
        }
    }
}

function findAllTransactionDeposit(account){
    if(!account) return
    const findAccount = listTransactionsDeposit.filter(dep => dep.account === account)
    if(findAccount) {
        return findAccount
    }
}

function findAllTransactionWithdraw(account){
    if(!account) return
    const findAccount = listTransactionsWithdrawal.filter(dep => dep.account === account)
    if(findAccount) {
        return findAccount
    }
}

function findAllTransactionPix(account){
    if(!account) return
    const findAccount = listTransactionsPix.filter(dep => dep.account === account)
    if(findAccount) {
        return findAccount
    }
}






module.exports = {
    showTransactionDeposit,
    showTransactionWithdrawal,
    showTransactionPix,
    createdDepositReceipt,
    createdWithdrawalReceipt,
    createdDepositPix
}
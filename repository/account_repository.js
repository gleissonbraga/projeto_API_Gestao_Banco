const transaction_repository = require('./transaction_repository')
let account = []


function createdAccount(user){
    const balance = 0
    account.push({
        account: user.account,
        name: user.name,
        cpf: user.cpf,
        balance: balance
    }) 
}

function showBalance(accountBank){
    let userAccount = account.findIndex(acc => acc.account == accountBank)
    if(userAccount == undefined){
        return undefined
    } else {
        if(userAccount == -1) return
        return account[userAccount].balance
    }
}


function depositMoney(accountBank, value){
    if(!account || value < 0){
        return
    }

    let userAccount = account.findIndex(acc => acc.account == accountBank)
    if(userAccount == undefined){
        return undefined
    } else {
        if(userAccount == -1) return
        account[userAccount].balance += value
        transaction_repository.createdDepositReceipt(account[userAccount], value)
        return account[userAccount]
    }
}


function withdrawMoney(accountBank, value){
    if(!accountBank || value < 0){
        return
    }

    let userAccount = account.findIndex(acc => acc.account == accountBank)
    if(userAccount == undefined) {
        return undefined
    } else {
        if(userAccount == -1) return
        if(value > account[userAccount].balance){
            return account[userAccount]
        } else {
            account[userAccount].balance -= value
            transaction_repository.createdWithdrawalReceipt(account[userAccount], value)
            return true
        }
    }
}

function sendPix(accountBank, value){
    if(!accountBank || value < 0){
        return
    }

    let userAccount = account.findIndex(acc => acc.account == accountBank)
    if(userAccount == -1) return
    account[userAccount].balance += value
    transaction_repository.createdDepositPix(account[userAccount], value)
    return {name: account[userAccount].name, valuePix: value}

}

module.exports = {
    createdAccount,
    showBalance,
    depositMoney,
    withdrawMoney,
    sendPix
}
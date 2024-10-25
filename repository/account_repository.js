
let account = [{ "account": 42587568, "name": "Gleisson", "balance": 0}]


// conta, saldo, 

function createdAccount(user){
    const balance = 0
    account.push({
        account: user.account,
        name: user.name,
        balance: balance
    }) 
}

function showBalance(accountBank){
    let userAccount = account.findIndex(acc => acc.account == accountBank)
    if(userAccount == -1) return
    return account[userAccount].balance
}


function depositMoney(accountBank, value){
    if(!account || value < 0){
        return
    }

    let userAccount = account.findIndex(acc => acc.account == accountBank)
    if(userAccount == -1) return
    account[userAccount].balance += value
    return account[userAccount]
}

function withdrawMoney(accountBank, value){
    if(!accountBank || value < 0){
        return
    }

    let userAccount = account.findIndex(acc => acc.account == accountBank)
    if(userAccount == -1) return
    if(value > account[userAccount].balance){
        return account[userAccount]
    } else {
        account[userAccount].balance -= value
        return true
    }


}

module.exports = {
    createdAccount,
    showBalance,
    depositMoney,
    withdrawMoney
}
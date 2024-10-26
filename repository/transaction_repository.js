
let listTransactionsDeposit = []
let listTransactionsWithdrawal = []
let listTransactionsPix = []


function showTransactionDeposit(){
    return listTransactionsDeposit
}

function createdDepositReceipt(account, value){
    listTransactionsDeposit.push({
        // name: user.name,
        // cpf: user.cpf,
        account: account.account,
        valor: value,
        transactionDate: new Date()
    })
}
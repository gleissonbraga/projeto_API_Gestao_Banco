const httpError = require('./errors/HttpError')
const express = require('express')
const user_router = require("./router/user_router")
const account_router = require("./router/account_router")
const transaction_repository = require('./repository/transaction_repository')


const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user', user_router)
app.use('/api/conta', account_router)


app.get('/deposit', (req, res) => {
    res.json(transaction_repository.showTransactionDeposit())
})

app.get('/withdraw', (req, res) => {
    res.json(transaction_repository.showTransactionWithdrawal())
})

app.get('/pix', (req, res) => {
    res.json(transaction_repository.showTransactionPix())
})


app.listen(PORT, () => {
    console.log(`Servidor => http://localhost:${PORT}`)
})
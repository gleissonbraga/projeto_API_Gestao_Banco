const httpError = require('./errors/HttpError')
const express = require('express')
const user_router = require("./router/user_router")
const account_router = require("./router/account_router")
const accountRepository = require('./repository/account_repository')


const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user', user_router)
app.use('/api/conta', account_router)


app.post('/bank/depositar/:conta', (req, res) => {
    const valor = req.body.balance
    const conta = req.params.conta
    res.json(accountRepository.depositMoney(conta, valor))
})

app.listen(PORT, () => {
    console.log(`Servidor => http://localhost:${PORT}`)
})
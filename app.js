const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const user_router = require("./router/user_router")
const account_router = require("./router/account_router")
const transaction_router = require('./router/transaction_router')
const loginController = require('./controller/login_controller')
const authMiddleware = require('./middleware/auth_middleware')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/api/login', loginController.login)


app.use(authMiddleware.verifyAccess)
app.use('/api/user', user_router)
app.use('/api/conta', account_router)
app.use('/api/transacao', transaction_router)


app.listen(PORT, () => {
    console.log(`Servidor => http://localhost:${PORT}`)
})
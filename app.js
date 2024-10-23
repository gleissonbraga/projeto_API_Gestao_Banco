const httpError = require('./errors/HttpError')
const express = require('express')
const user_router = require("./router/user_router")


const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user', user_router)

app.listen(PORT, () => {
    console.log(`Servidor => http://localhost:${PORT}`)
})
const user_repository = require('./repository/user_repository')
const express = require('express')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/mostrar', (req, res) => {
    res.json(user_repository.showUsers)
})
app.post('/criar', user_repository.createdUser)


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})
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
    res.json(user_repository.showUsers())
})
app.post('/criar', (req, res) => {
    const user = req.body
    res.json(user_repository.createdUser(user))
})

app.get('/buscar/:id', (req, res) => {
    const id = req.params.id
    res.json(user_repository.findUser(id))
})

app.post('/deletar/:id', (req, res) => {
    const id = req.params.id
    res.json(user_repository.deleteUser(id))
})

app.post('/atualizar/:id', (req, res) => {
    const id = req.params.id
    const user = req.body
    res.json(user_repository.updateUser(user, id))
})


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})
const express = require('express')
const app = express()

app.use((req, res, next)=>{
    console.log('%s %s %s', req.method, req.url, req.path)
    next()
})

app.get('/', (req,res) => {
    res.send("Root page")
})

app.get('/about', (req,res) => {
    res.send("About page")
})

app.post('/data', (req,res) => {
    res.send("Posting data")
})

app.get('/users/signin', (req,res) => {
    res.send("Signin page")
})

app.get('/users/signup', (req,res) => {
    res.send("Signup page")
})

app.get('/users/:userid', (req,res)=> {
    res.send("Bem-vindo, " + req.params.userid + "!")
})

app.get('/users', (req,res) => {
    res.redirect("/users/signup")
})

app.use((req, res, next) => {
    res.status(404).send('Página não encontrada.<br><a href="/">Voltar ao início</a>')
})

app.listen(3000, () => {
    console.log("Server running.")
})
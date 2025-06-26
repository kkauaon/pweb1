const express = require('express')
const axios = require('axios')

const PORT = 3000

const API_URL = "https://ron-swanson-quotes.herokuapp.com"

const app = express();

app.set('view engine', 'ejs')

app.get('/', async (req,res)=>{
    await axios.get(`${API_URL}/v2/quotes`)
        .then(response => {
            res.render('index', { error: false, mensagem: response.data[0] })
        })
        .catch(response => {
            res.render('index', { error: true, mensagem: null })
        })
})

app.listen(PORT, () => {
    console.log("Running on http://localhost:"+PORT)
})
const express = require('express')
const app = express()
const mainRoute = require('./routes/mainRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  if (req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  }next()
}) // Tratamento dos erros cors se der tempo de hospedar

app.use('/', mainRoute)

module.exports = app
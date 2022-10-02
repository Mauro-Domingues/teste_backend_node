const express = require('express')
const mainRoute = require('./routes/mainRoute')
const userRoute = require('./routes/userRoutes/userRoutes.js')
const eventRoute = require('./routes/eventRoutes/eventRoute.js')
const ticketRoute = require('./routes/eventRoutes/ticketRoutes/ticketRoutes.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  if (req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  }next()
})

app.use('/', mainRoute)
app.use('/user', userRoute)
app.use('/event', eventRoute)
app.use('/ticket', ticketRoute)

module.exports = app
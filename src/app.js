const ticketRoute = require('./routes/eventRoutes/ticketRoutes/ticketRoutes.js')
const eventRoute = require('./routes/eventRoutes/eventRoute.js')
const userRoute = require('./routes/userRoutes/userRoutes.js')
const mainRoute = require('./routes/mainRoute')
const cors = require('./middlewares/cors')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', cors, mainRoute)
app.use('/user', userRoute)
app.use('/event', eventRoute)
app.use('/ticket', ticketRoute)

module.exports = app // teste de deploy//remover env
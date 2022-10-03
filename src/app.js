const express = require('express')
const mainRoute = require('./routes/mainRoute')
const userRoute = require('./routes/userRoutes/userRoutes.js')
const eventRoute = require('./routes/eventRoutes/eventRoute.js')
const ticketRoute = require('./routes/eventRoutes/ticketRoutes/ticketRoutes.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', mainRoute)
app.use('/user', userRoute)
app.use('/event', eventRoute)
app.use('/ticket', ticketRoute)

module.exports = app
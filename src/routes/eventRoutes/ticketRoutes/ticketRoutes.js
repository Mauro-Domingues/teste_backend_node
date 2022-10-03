const express = require('express')
const router = express.Router()
const ticketController = require('../../../contollers/eventController/ticketController/ticketController.js')
const auth = require('../../../middlewares/auth.js')

router.get('/', auth, ticketController.getAll)
router.get('/:id', auth, ticketController.get)
router.get('/id/:ticket_id', auth, ticketController.getById)
router.post('/', auth, ticketController.post)
router.put('/id/:ticket_id', auth, ticketController.put)
router.delete('/id/:ticket_id', auth, ticketController.delete)

module.exports = router
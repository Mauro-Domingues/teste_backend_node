const express = require('express')
const router = express.Router()
const ticketController = require('../../../contollers/eventController/ticketController/ticketController.js')

router.get('/', ticketController.getAll)
router.get('/:id', ticketController.get)
router.get('/id/:ticket_id', ticketController.getById)
router.post('/', ticketController.post)
router.put('/id/:ticket_id', ticketController.put)
router.delete('/id/:ticket_id', ticketController.delete)

module.exports = router
const express = require('express')
const router = express.Router()
const ticketController = require('../../../contollers/eventController/ticketController/ticketController.js')

router.get('/', ticketController.getAll)
router.get('/:id', ticketController.get)
router.get('/id/:ticket_id', ticketController.getById)
router.post('/', ticketController.post)
router.put('/', ticketController.put)
router.delete('/', ticketController.delete)

module.exports = router
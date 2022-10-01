const express = require('express')
const router = express.Router()
const ticketController = require('../../../contollers/eventController/ticketController/ticketController.js')

router.get('/:id', ticketController.get)
router.get('/', ticketController.getById)
router.post('/', ticketController.post)
router.put('/', ticketController.put)
router.delete('/', ticketController.delete)

module.exports = router
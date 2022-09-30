const express = require('express')
const router = express.Router()
const ticketController = require('../../../contollers/eventController/ticketController/ticketController.js')

router.get('/', ticketController.get)
router.get('/:id', ticketController.getById)
router.post('/', ticketController.post)
router.put('/:id', ticketController.put)
router.delete('/:id', ticketController.delete)

module.exports = router
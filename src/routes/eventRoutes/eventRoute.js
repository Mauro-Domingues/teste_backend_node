const express = require('express')
const router = express.Router()
const eventController = require('../../contollers/eventController/eventController.js')

router.get('/', eventController.get)
router.get('/:id', eventController.getById)
router.post('/', eventController.post)
router.put('/:id', eventController.put)
router.delete('/:id', eventController.delete)

module.exports = router
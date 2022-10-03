const eventController = require('../../contollers/eventController/eventController.js')
const auth = require('../../middlewares/auth.js')
const express = require('express')
const router = express.Router()

router.get('/', auth, eventController.get)
router.get('/:id', auth, eventController.getById)
router.post('/', auth, eventController.post)
router.put('/:id', auth, eventController.put)
router.delete('/:id', auth, eventController.delete)

module.exports = router
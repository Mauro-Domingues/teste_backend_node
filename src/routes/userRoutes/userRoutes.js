const userController = require('../../contollers/userController/userController.js')
const auth = require('../../middlewares/auth.js')
const express = require('express')
const router = express.Router()

router.get('/', auth, userController.get)
router.get('/:id', auth, userController.getById)
router.post('/', userController.post)
router.post('/login', userController.login)
router.put('/:id', auth, userController.put)
router.delete('/:id', auth, userController.delete)

module.exports = router
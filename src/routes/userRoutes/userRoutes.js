const express = require('express')
const router = express.Router()
const userController = require('../../contollers/userController/userController.js')

router.get('/', userController.get)
router.get('/:id', userController.getById)
router.post('/', userController.post)
router.post('/login', userController.login)
router.put('/:id', userController.put)
router.delete('/:id', userController.delete)

module.exports = router
const express = require('express')
const router = express.Router()

const { usersController, riffsController } = require('../controllers')

router.post('/users/signup', usersController.registerUser)

router.get('/riffs', riffsController.getRiffs)

module.exports = router

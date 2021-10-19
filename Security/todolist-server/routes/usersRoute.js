const express = require('express')
const usersController = require('../controller/usersController')

const userRouter = express.Router()

userRouter.post('/login', usersController.login)
userRouter.post('/register', usersController.register)
userRouter.delete('/', usersController.delete)

module.exports = userRouter;
const express = require('express')
const authenController = require('../controller/authenController')

const authenRouter = express.Router();

authenRouter.post('/login', authenController.login)
authenRouter.post('/register', authenController.register)
authenRouter.delete('/', authenController.delete)


module.exports = authenRouter;
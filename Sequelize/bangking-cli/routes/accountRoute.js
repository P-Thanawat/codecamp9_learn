const express = require('express')
const accountController = require('../controllers/accountController')

const accountRouter = express.Router();

accountRouter.get('/', accountController.getall)

module.exports = accountRouter;
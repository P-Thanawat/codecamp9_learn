const express = require('express')
const transferController = require('../controllers/transferController')

const transferRouter = express.Router()

transferRouter.get('/', transferController.getall)

module.exports = transferRouter
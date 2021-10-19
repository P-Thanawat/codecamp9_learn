const express = require('express')
const branchController = require('../controllers/branchController')

const branchRouter = express.Router()

branchRouter.get('/', branchController.getall)

module.exports = branchRouter;
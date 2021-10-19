const { Router } = require('express')
const express = require('express')
const listController = require('../controller/listController')
const { authenticate } = require('../controller/usersController')

const listRouter = express.Router()

listRouter.get('/', authenticate, listController.getAllLists)
listRouter.get('/:id', authenticate, listController.getListById)
listRouter.post('/', authenticate, listController.createList)
listRouter.post('/:id', authenticate, listController.updateList)
listRouter.delete('/:id', authenticate, listController.deleteList)

// Router.get('/users', authenticate, checkRole('ADMIN'), userController.getAllUsers)

module.exports = listRouter;
const express = require("express");
const todoController = require('../controllers/todoController')

//router
const router = express.Router();
router.get('/', todoController.getAllTodo)
router.get('/:id', todoController.getTodo)
router.post('/', todoController.createTodo)
router.put('/:id', todoController.updateTodo)
router.delete('/:id', todoController.deleteTodo)

module.exports = router;
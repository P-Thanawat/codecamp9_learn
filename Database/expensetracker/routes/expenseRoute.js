const express = require('express')
const expenseController = require('../controllers/expenseController')

const router = express.Router()
router.post('/', expenseController.create)
router.delete('/:id', expenseController.delete)

module.exports = router;
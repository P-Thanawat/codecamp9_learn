const express = require('express')
const customerController = require('../controllers/customerController')

const customerRouter = express.Router()

customerRouter.get('/', customerController.getAllCustomers);
customerRouter.get('/:id', customerController.getCustomerById);
customerRouter.post('/', customerController.createCustomer);
customerRouter.put('/:id', customerController.updateCustomer);
customerRouter.delete('/:id', customerController.deleteCustomer);

module.exports = customerRouter;
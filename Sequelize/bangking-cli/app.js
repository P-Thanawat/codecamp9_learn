const express = require('express')
const db = require('./models');
const accountRouter = require('./routes/accountRoute');
const branchRouter = require('./routes/branchRoute');
const customerRouter = require('./routes/customerRoute');
const transferRouter = require('./routes/transferRoute');

//todo rest api: CRUD Customer, Branch

const app = express();

//? parse request body to object  
app.use(express.json());

//? config where to store static file
app.use(express.static('/public'))

//? Router
app.use('/customer', customerRouter)
app.use('/account', accountRouter)
app.use('/branch', branchRouter)
app.use('/transfer', transferRouter)

//? handle path and method not found
app.use((req, res, next) => {
  res.status(404).json({ message: 'this resource is not found' })
})

//? handle all error
app.use((err, req, res, next) => {
  res.status(404).json({ message: 'this resource is not found' })
})


app.listen(9000, () => { console.log('server is running on port 9000') })


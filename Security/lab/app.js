const express = require('express')
const authenRouter = require('./routes/authenRoutes')
const cors = require('cors')
// const { sequelize } = require('./models')

// sequelize.sync();

const app = express();

//? cors
app.use(cors()) //? middleware cors: allow access origin cross sharing

//? parse request body to object  
app.use(express.json());

//? config where to store static file
app.use(express.static('/public'))

//? Router
app.use('/authen', authenRouter)

//? handle path and method not found
app.use((req, res, next) => {
  res.status(404).json({ message: 'this resource is not found' })
})

//? handle all error
app.use((err, req, res, next) => {
  res.status(404).json({ message: 'this resource is not found' })
})


app.listen(9000, () => { console.log('server is running on port 9000') })
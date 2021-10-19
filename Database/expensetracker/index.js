const express = require('express')
const mysql = require('mysql2/promise')
const expenseRoute = require('./routes/expenseRoute')

const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/expense', expenseRoute)

app.listen(9000, () => { console.log('server is running on port 9000') })
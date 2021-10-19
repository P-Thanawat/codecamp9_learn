const express = require('express')
const mysql = require('mysql2/promise');

const todoRoute = require('../routes/todoRoute')

//? first example
// const connPromise = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '1234',
//   database: 'todo_mysql'

// })

// connPromise
//   .then(connection => {
//     console.log('connect to database successfully') // return connection when it's success
//     // const resultPromise = connection.query('INSERT INTO lists (title,due_date) VALUES ("Do homework","2021-09-20")') //careful about quote
//     const resultPromise = connection.query('SELECT * FROM lists') //SELECT
//     return resultPromise;
//   })
//   .then(result => {
//     console.log(result)
//   })
//   .catch(err => console.log(err)) //LOG ERROR

//? second example (Pools)
// const pool = mysql.createPool({ //connect with sql
//   host: 'localhost',
//   user: 'root',
//   password: '1234',
//   database: 'todo_mysql',
//   connectionLimit: 100 //pools' limit
// })

// pool.query('SELECT * FROM lists').then(([rows]) => {
//   console.log(rows)
// })

//? third
// const {username, password} = req.body
// 'SELECT * FROM users WHERE username = ' + username + 'AND PASSWORD = ' + password  //using variable in selection

//? fourth Prepared Statement
// pool.execute('INSERT INTO lists (title, completed, due_date) VALUES (?, ?, ?)', ["Running", 1, new Date('2021-10-10')])
//   .then(result => {
//     console.log(result[0])
//   })

// pool.execute('SELECT * FROM lists WHERE id=?', [3])
//   .then(result => {
//     console.log(result[0])
//   })

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/todos', todoRoute)

app.listen(9000, () => console.log('server running on port 9000'))
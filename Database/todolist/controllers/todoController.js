const { execute } = require("../db");

// getAllTodo
exports.getAllTodo = async (req, res, next) => {
  try {
    const todos = await execute('SELECT * FROM lists')
    console.log(todos)
    res.status(200).json({ todos, message: 'successfully get todos' }) //default = 200
  }
  catch (err) {
    console.log(err.message)
  }
}

// get by id
exports.getTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await execute('SELECT * FROM lists WHERE id=?', [id])
    res.status(200).json({ todo, message: 'successfully get todo' }) //default = 200
  }
  catch (err) {
    console.log(err.message)
  }
}

// post
exports.createTodo = async (req, res, next) => {
  try {
    const { title, completed, due_date } = req.body;
    const result = await execute('INSERT INTO lists (title, completed, due_date) VALUES (?,?,?)', [title, completed, due_date])
    res.status(201).json({ id: result.insertId, message: 'successfully create' }) //default = 200
  }
  catch (err) {
    console.log(err.message)
  }
}

// put
exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params
    const { title, completed, due_date } = req.body;
    const result = await execute('UPDATE lists SET title = ?, completed=?, due_date=? WHERE id=?', [title, completed, due_date, id])
    if (result.affectedRows === 0) {
      return res.status(400).json({ message: 'that id is not found!' })
    }
    res.status(200).json({ todo: { id, title, completed, due_date }, message: 'successfully edit' }) //default = 200
  }
  catch (err) {
    console.log(err.message)
  }
}

// delete
exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await execute('DELETE FROM lists WHERE id=?', [id])
    if (result.affectedRows === 0) {
      return res.status(400).json({ message: 'that id is not found!' })
    }
    else {
      res.status(204).json()
    }
  }
  catch (err) {
    console.log(err.message)
  }
}




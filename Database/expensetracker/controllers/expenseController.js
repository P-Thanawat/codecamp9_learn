const { execute } = require("../db");

exports.create = async (req, res, next) => {
  try {
    const { payee, amount, date, comment, title, type } = req.body;
    const categories = await execute('INSERT INTO categories (title,type) VALUES (?,?)', [title, type])
    const transactions = await execute('INSERT INTO transactions (payee,amount,date,comment,category_id) VALUES (?,?,?,?,?)', [payee, amount, date, comment, categories.insertId])
    res.status(200).json({ message: "bring it on" });
  }
  catch (err) {
    console.log(err)
  }
}

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params
    const { category_id } = await execute('SELECT category_id FROM transactions WHERE id=?', [id])
    const result = await execute('DELETE FROM transactions WHERE id=?', [id])
    const result2 = await execute('DELETE FROM categories WHERE id=?', [category_id])
    console.log(result)
    res.status(204).json();
  }
  catch (err) {
    console.log(err)
  }
}


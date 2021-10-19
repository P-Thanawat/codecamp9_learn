const { authen } = require("../models")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.login = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const user = await authen.findOne({
      where: {
        username: username
      }
    })
    if (!user) return res.status(400).json({ message: 'username or password invalid' })
    const isCorrectPassword = await bcrypt.compare(password, user.password)
    console.log(`isCorrectPassword`, isCorrectPassword)
    if (!isCorrectPassword) return res.status(400).json({ message: 'username or password invalid' })


    const payload = {
      id: user.id,
      email: user.email,
      username: user.username,
      role: 'CUSTOMER'
    }

    const token = jwt.sign(payload, 'SECRET_KEY', { expiresIn: 60 * 60 * 24 * 30 })


    res.json({ message: 'loged in successfully', token }); //? status 200
  }
  catch (err) {
    console.log(err.message)
  }
}

exports.register = async (req, res, next) => {

  try {
    const { username, password, email, confirmPassword } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(`req.body`, req.body)
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'password and confirm password are not match' })
    }

    await authen.create({
      username,
      password: hashedPassword,
      email,
    })
    res.status(200).json({ message: `created successfully` })
  }
  catch (err) {
    console.log(err.message)
  }
}

exports.delete = async (req, res, next) => {
  try {
    await authen.destroy({ truncate: true })
    res.json({ message: 'success' });
  }
  catch (err) {
    console.log(err.message)
  }
}
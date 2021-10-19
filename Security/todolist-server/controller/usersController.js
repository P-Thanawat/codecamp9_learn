const { users } = require("../models")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.checkRole = (...roles) => async (req, res, next) => {
  // ['ADMIN']
  if (!roles.includes(req.user.role)) {
    res.status(403).json({ message: 'NO RIGHT FOR YOUR ROLE' })
  }
  next()
}

exports.authenticate = async (req, res, next) => {
  try {
    const { authorization } = req.headers; //? header request
    console.log(`req.headers`, req.headers)
    if (!authorization || !authorization.startsWith('Bearer')) return res.status(401).json({ message: 'you are unauthorizations' });
    const token = authorization.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'you are unauthorizationsss' });
    const decorded = jwt.verify(token, process.env.JWT_SECRET_KEY); //? process.env.SECRET_KEY is global
    const user = await users.findOne({ where: { id: decorded.id } })
    if (!user) return res.status(401).json({ message: 'you are unauthorizationsss' });
    req.user = user;
    next();
  }
  catch (err) {
    next(err)
  }

}


exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({
      where: {
        email
      }
    });
    if (!user) return res.status(400).json({ message: 'username or pasword incorrect' });
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) return res.status(400).json({ message: 'username or pasword incorrect' });
    const payload = {
      id: user.id,
      username: user.username,
      email: user.email
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 60 }) //? 1 day
    res.json({ message: 'login succussfully', token })
  }
  catch (err) {
    next(err)
  }
}

exports.register = async (req, res, next) => {
  try {
    const { username, password, email, confirmPassword } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    if (password !== confirmPassword) return res.status(400).json({ message: 'password and confirm password are not match' })
    //throw new CustumError('password and confirm password are not match',400)
    await users.create({
      username,
      password: hashedPassword,
      email,
    })
    res.json({ message: `created successfully` })
  }
  catch (err) {
    next(err)
  }
}

exports.delete = async (req, res, next) => {
  try {
    await authen.destroy({ truncate: true })
    res.json({ message: 'success' });
  }
  catch (err) {
    next(err)
  }
}
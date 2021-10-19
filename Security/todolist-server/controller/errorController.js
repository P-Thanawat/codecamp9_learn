module.exports = (err, req, res, next) => {
  console.log(err)

  let code;
  let message;
  if (err.name === 'SequelizeUniqueConstraintError') {
    code = 400;
  }
  if (err.name === 'SequelizeUniqueConstraintError') {
    code = 400;
    message = "Username or Email have already been used";
    // return res.status(400).json({ message: 'Username or Email have already been used' })
  }

  if (err.name === 'jsonWebTokenError') {
    code = 401;
  }
  if (err.name === 'TokenExpiredError') {
    code = 401;

  }


  res.status(code || err.code || 500).json({ message: message || err.message })
}
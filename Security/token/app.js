const jwt = require('jsonwebtoken')

const payload = {
  firstName: 'John',
  lastName: 'Due',
  age: 30,
}

const secretKey = 'uuidv4';
const token = jwt.sign(payload, secretKey, { expiresIn: 60 * 60 * 24 })
console.log(`token`, token)

try {
  const decodedPlayload = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEdWUiLCJhZ2UiOjMwLCJpYXQiOjE2MzI3Mjg3NzYsImV4cCI6MTYzMjgxNTE3Nn0.4yLstXN9vSYTJ39iCQa831uf5HtC2O52_YjVccJkjb8',
    'wrong',
  )
  console.log(`decodedPlayload`, decodedPlayload)
}
catch (err) { console.log(err.message) }


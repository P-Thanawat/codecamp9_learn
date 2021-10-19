const bcrypt = require('bcryptjs')

const password = '123456';
const hashedToCheck = '$2a$12$uPYsVC0pyhN/a8tIoGly9eGEbXHImpXtdwngcWIe2kwFkcx7C/P8i'

//? hash password including synchronous and asynchronous, but sync is more efficiency
// const run = async () => {
// const hashedPassword = await bcrypt.hash(password, 12) //? 12 = cost = hash delay
// console.log(hashedPassword)
// }

//? check hashed password
const run = async () => {
  const isCorrectPassword = await bcrypt.compare(password, hashedToCheck)
  console.log(`isCorrectPassword`, isCorrectPassword)
}
run()

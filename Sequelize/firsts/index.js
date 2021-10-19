const { User } = require('./db')
const { Op } = require('sequelize')


// const user = User.build({ //? build is static method (it is called directly)
//   email: 'john@gmail.com',
//   firstName: 'John',
//   lastName: 'Doe'
// })

// console.log(JSON.stringify(user))

// user.save(); //? save is instance method (method is called from instance or object)


// const run = async () => {
//   const user = await User.findOne({ where: { id: 1 } })
//   console.log(user.toJSON())
//   user.email = 'john@gmail.com'
//   user.firstName = 'Joe'
//   user.save()
// }

// UPDATE();

//todo Delete Row Using instace
// const del = async () => {
//   const user = await User.findOne({ where: { id: 1 } })
//   console.log(user.toJSON())
//   user.destroy()
// }
// del();

//todo Create
// const staticCreate = async () => {
//   const newUser = await User.create({
//     email: 'peter@gmail.com',
//     firstName: 'Peter',
//     lastName: 'Corp'
//   })
//   console.log(newUser.toJSON())
// }
// staticCreate();

//todo Update Row using update method
// const staticUpdate = async () => {
//   const result = await User.update({ firstName: 'Paul', lastName: 'Gascoign' }, { where: { id: 3 } });
//   console.log(result);
// };
// staticUpdate();

//todo Delete Row using destroy method
// const staticDelete = async () => {
//   const row = await User.destroy({ where: { id: 3 } })
//   console.log(`row`, row)
// }
// staticDelete();

//todo Create multiple record
// User.bulkCreate([
//   { email: 'jack@gmail.com', firstName: 'Jack', lastName: 'sparrow' },
//   { email: 'davy@gmail.com', firstName: 'Davy', lastName: 'Jones' },
//   { email: 'elizabeth@gmail.com', firstName: 'Elizabeth', lastName: 'Swan' },
//   { email: 'will@gmail.com', firstName: 'Will', lastName: 'Turnor' },
//   { email: 'captain@gmail.com', firstName: 'Captain', lastName: 'Barbosa' },
// ])

//todo Select Query

//todo select all
// const run = async () => {
//   const result = await User.findAll();
//   console.log(JSON.stringify(result, null, 2))
// }
// run();

//todo select some columns
// const run = async () => { //? first
//   const result = await User.findAll({
//     attributes: ['email', 'firstName']
//   })
//   console.log(JSON.stringify(result, null, 2))
// }
// run();

// const run = async () => { //? second
//   const result = await User.findAll({
//     attributes: ['email', 'firstName', ['created_at', 'createTime']]
//   })
//   console.log(JSON.stringify(result, null, 2))
// }
// run();

// const run = async () => { //? third
//   const result = await User.findAll({
//     // attributes: ['email', 'firstName', 'lastName', 'created_At','updated_at']
//     attributes: { exclude: ['id'] }
//   })
//   console.log(JSON.stringify(result, null, 2))
// }
// run();

//todo select where clause
// const run = async () => {
//   const result = await User.findAll({
//     where: {
//       id: 3
//     }
//   })
// }

//todo using or in where
// const run = async () => {
//   const result = await User.findAll({
//     where: {
//       [Op.or]: [
//         { id: 3 },
//         { id: 4 }
//       ]
//     }
//   })
// }

//todo id =4 or 6 or 7 or 8
// const run =async()=>{
//   const result = await User.findAll({
//     where{
//       [Op.or]:[
//         {id:3},
//         {id:6},
//         {id:7},
//         {id:8}
//       ]
//     }
//   })
// }
// run();

//todo 
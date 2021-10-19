const { Op, Sequelize, QueryTypes } = require('sequelize')
const { Customer, Account, Branch, Transfer, sequelize } = require('./db')

// const run = async () => {
//   const result = await Branch.findAll()
//   console.log(JSON.stringify(result, null, 2))
// }

// const run = async () => {
//   const result = await Customer.findAll({
//     order: ['firstName', 'lastName']
//   })
//   console.log(JSON.stringify(result, null, 2))
// }

// const run = async () => {
//   const result = await Customer.findAll({
//     order: [
//       ['firstName', 'DESC'],
//       ['lastName', 'DESC']
//     ]

//   })
//   console.log(JSON.stringify(result, null, 2))
// }

//todo order branch
// const run = async () => {
//   const result = await Branch.findAll({
//     order: [
//       ['name', 'DESC'],
//     ]

//   })
//   console.log(JSON.stringify(result, null, 2))
// }

//todo order account
// const run = async () => {
//   const result = await Account.findAll({
//     where: {
//       balance: {
//         [Op.gt]: 5000
//       }
//     },
//     order: [
//       ['balance', 'DESC'],
//     ]

//   })
//   console.log(JSON.stringify(result, null, 2))
// }

//todo group by
// const run = async () => {
//   const result = await Customer.findAll({
//     attributes: [
//       'firstName', ['last_name', 'lname'] //! depend on sql data
//     ]
//   })
//   console.log(JSON.stringify(result, null, 2))
// }

//todo group by and counting
// const run = async () => {
//   const result = await Customer.findAll({
//     group: [
//       'gender'
//     ],
//     attributes: [
//       'gender', [Sequelize.fn('COUNT', Sequelize.col('gender')), 'count'] //! Need setting name for key
//     ],
//     // order: [
//     //   Sequelize.fn('COUNT', Sequelize.col('gender'))
//     // ],
//     order: [
//       Sequelize.literal('count')
//     ]


//   })
//   console.log(JSON.stringify(result, null, 2))
// }

//todo practice: find balance total each customer_id, branch_id, branch_id and customer_id
// const run = async () => {
//   const customer = await Account.findAll({
//     group: [
//       'customer_id'
//     ],
//     attributes: [
//       'customer_id', [Sequelize.fn('SUM', Sequelize.col('balance')), 'total']
//     ]
//   })
//   const account = await Account.findAll({
//     group: [
//       'branch_id'
//     ],
//     attributes: [
//       'customer_id', [Sequelize.fn('SUM', Sequelize.col('balance')), 'total']
//     ]
//   })
//   const third = await Account.findAll({
//     group: [
//       'branch_id', 'customer_id'
//     ],
//     attributes: [
//       'branch_id', 'customer_id', [Sequelize.fn('SUM', Sequelize.col('balance')), 'total']
//     ]
//   })


//   console.log(JSON.stringify(customer, null, 2))
//   console.log(JSON.stringify(account, null, 2))
//   console.log(JSON.stringify(third, null, 2))
// }

//todo limit and offset
// const run = async()=>{
//   const result = await Account.findAll({
//     limit:5,
//     offset:10
//   })
// }

// const run = async () => {
//   const result = await Customer.findOne({ //! findone
//     where: {
//       id: 1
//     },
//     include: Account  //? reciev account data
//   })
//   console.log(JSON.stringify(result, null, 2))
// }

// const run = async () => {
//   const result = await Account.findAll({
//     where: {
//       id: 1
//     },
//     attributes: [
//       'id', 'openDate', 'balance'
//     ],
//     // include: Customer  //? reciev account data
//     include: { //? full version
//       model: Customer,
//       attributes: {
//         exclude: ['createdAt', 'updatedAt']
//       }

//     }
//   })

// const run = async () => {
//   const result = await Customer.findAll({
//     where: {
//       id: 1,
//       '$Accounts.balance$': {
//         [Op.lt]: 10000
//       }
//     },
//     order: [[Account, 'balance']],
//     include: [Account, Branch]
//   })
//   console.log(JSON.stringify(result, null, 2))
// }

//todo select id,firstname,lastname of customer and id,balance of account and branch name
// const run = async () => {
//   const result = await Customer.findAll({
//     attributes: ['id', 'firstName', 'lastName'],
//     include: {
//       model: Account,
//       attributes: ['balance'],
//       include: {
//         model: Branch,
//         attributes: ['name']
//       }
//     }

//   })
//   console.log(JSON.stringify(result, null, 2))
// }

//todo select account that has balance greater than 10000 and select branch name by codition that it include 't'
// const run = async () => {
//   const result = await Account.findAll({
//     where: {
//       balance: {
//         [Op.gt]: 10000
//       }
//     },
//     include: [{
//       model: Customer,
//       where: {
//         firstName: {
//           [Op.like]: '%t%'
//         }
//       },
//       attributes: ['firstName']

//     },
//     {
//       model: Branch,
//       attributes: ['name'],

//     }
//     ],
//     order: [['balance', 'DESC']]

//   })
//   console.log(JSON.stringify(result, null, 2))
// }
// run()

// const run = async () => {
//   const result = await Transfer.findAll({
//     // include: ['ToAccount','FromAccount']
//     include: [
//       { model: Account, as: 'ToAccount', attributes: ['id', 'balance'] },
//       'FromAccount'
//     ]

//   });
//   console.log(JSON.stringify(result, null, 2))
// }

//todo raw query
const run = async () => {
  const sql = 'SELECT c.first_name AS firstName,SUM(a.balance) AS total FROM accounts a LEFT JOIN customers c ON a.customer_id = c.id GROUP BY c.id';
  const arrResult = await sequelize.query(sql, { type: QueryTypes.SELECT });
  console.log(JSON.stringify(arrResult, null, 2))
}
run()

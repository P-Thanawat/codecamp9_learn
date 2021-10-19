const { Sequelize, DateTypes, DataTypes, BaseError } = require('sequelize')


const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: '1234',
  database: 'banking',
  dialect: 'mysql'

})

sequelize.authenticate().then(() => {
  console.log('DB connect')
})

// const Customer = sequelize.define('Customer', { //! Customer
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   gender: {
//     type: DataTypes.ENUM('MALE', 'FEMALE'),
//     birthDate: DataTypes.DATEONLY,
//     address: DataTypes.STRING
//   }
// },
//   {
//     underscored: true
//   }
// )
// const createCustomerModel = require('./Customer')
// const Customer = createCustomerModel(sequelize, DataTypes)
// const Customer = require('./Customer')(sequelize, DataTypes);

// const Branch = sequelize.define( //! Branch
//   'Branch', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   }
// },
//   {
//     underscored: true
//   }
// )

// const Branch = require('./Branch')(sequelize, DataTypes)

// const Account = sequelize.define('Account', { //! Account
//   openDate: {
//     type: DataTypes.DATEONLY,
//     allowNull: false
//   },
//   closeDate: DataTypes.DATEONLY,
//   balance: {
//     type: DataTypes.DECIMAL(15, 2),
//     allowNull: false
//   },
//   status: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//     defaultValue: true
//   }
// },
//   {
//     underscored: true
//   }
// )

// const Account = require('./Account')(sequelize, DataTypes)

//todo Create table
// const Transfer = sequelize.define('Transfer', {
//   date: {
//     type: DataTypes.DATE,
//     allowNull: false
//   },
//   amount: {
//     type: DataTypes.DECIMAL(15, 2),
//     allowNull: false
//   }
// },
//   {
//     underscored: true
//   }
// )

// const Transfer = require('./Transfer')(sequelize, DataTypes)

const db = {}
db.Customer = require('./Customer')(sequelize, DataTypes)
db.Branch = require('./Branch')(sequelize, DataTypes)
db.Account = require('./Account')(sequelize, DataTypes)
db.Transfer = require('./Transfer')(sequelize, DataTypes)


// db.Customer.associate(db)
// db.Branch.associate(db)
// db.Account.associate(db)

for (let model of Object.keys(db)) {
  if (db[model].associate) db[model].associate(db);
}



//todo Assume  customer - account by 1-1
// Customer.hasOne(Account); //? 1-1
// Account.belongsTo(Customer); //? fk is at account

//todo customer-account : 1-many
// Customer.hasMany(Account, { //? 1-many so it'll find fk as customer_id 
//   foreignKey: {
//     name: 'customerId',
//     allowNull: false
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT'
// })
// Account.belongsTo(Customer, {
//   foreignKey: {
//     name: 'customerId',
//     allowNull: false
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT'
// }) //? fk is at account


// Branch.hasMany(Account, {
//   foreignKey: {
//     name: 'branchId',
//     allowNull: false
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT'
// })

// Account.belongsTo(Branch, {
//   foreignKey: {
//     name: 'branchId',
//     allowNull: false
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT'
// })

//todo many-many
// Customer.belongsToMany(Branch, { through: 'account', foreignKey: { name: 'customerId' } })
// Branch.belongsToMany(Customer, { through: 'account', foreignKey: { name: 'branchId' } })

//todo as
// Account.hasMany(Transfer, {
//   as: 'TransferTos',
//   foreignKey: {
//     name: 'toAccountId',
//     allowNull: false
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT'
// })

// Transfer.belongsTo(Account, {
//   as: 'ToAccount',
//   foreignKey: {
//     name: 'toAccountId',
//     allowNull: false
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT'
// })

// Account.hasMany(Transfer, {
//   as: 'TransferFroms',
//   foreignKey: {
//     name: 'fromAccountId',
//     allowNull: false
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT'
// })

// Transfer.belongsTo(Account, {
//   as: 'FromAccount',
//   foreignKey: {
//     name: 'fromAccountId',
//     allowNull: false
//   },
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT'
// })

// sequelize.sync({ force: false });

db.sequelize = sequelize

module.exports = db;




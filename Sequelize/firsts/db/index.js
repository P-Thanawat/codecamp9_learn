const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: '1234',
  database: 'todo_seq',
  dialect: 'mysql'
})

// sequelize.authenticate()
// .then(()=>console.log('DB connected'))
// .catch((err)=>console.log('unable to connect',err))

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'fname'
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // tableName: 'person', //? map model depend on table name
  // timestamps: false, //? none of createdAt and updatedAt
  underscored: true //? map model in underscore format
})

module.exports = { User }




// sequelize.sync({ force: true }); //! cautious it'll drop database each render





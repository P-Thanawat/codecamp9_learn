module.exports = (sequelize, DataTypes) => {
  const authen = sequelize.define('authen', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
  },
    {
      underscored: true
    }
  )
  return authen;
}
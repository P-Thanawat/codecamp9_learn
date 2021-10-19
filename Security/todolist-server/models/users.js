module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
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


  users.associate = models => {
    users.hasMany(models.List, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    })

  }

  return users;
}
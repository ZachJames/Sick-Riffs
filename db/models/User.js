module.exports = (sequelize, types) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: types.STRING,
        allowNull: false,
      },
      password: {
        type: types.STRING,
        allowNull: false,
      },
      lastLogin: {
        type: types.DATE,
      },
    },
    {}
  )

  User.associate = models => {
    User.hasMany(models.Riff)
    User.hasMany(models.Like)
  }

  return User
}

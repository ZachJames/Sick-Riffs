const { hash, compare } = require('bcryptjs')

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

  User.beforeCreate((user, options) => {
    return hash(user.password, 12).then(hashedPwd => {
      user.password = hashedPwd
    })
  })

  User.prototype.matchesPassword = function(password) {
    return compare(password, this.password)
  }

  return User
}

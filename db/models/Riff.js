module.exports = (sequelize, types) => {
  const Riff = sequelize.define(
    'Riff',
    {
      title: {
        type: types.STRING,
        allowNull: false,
      },
      type: {
        type: types.STRING,
        allowNull: false,
      },
      filePath: {
        type: types.STRING,
        allowNull: false,
      },
      length: {
        type: types.INTEGER,
        allowNull: false,
      },
      description: {
        type: types.TEXT,
        allowNull: true,
      },
      stars: {
        type: types.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
    },
    {}
  )

  Riff.associate = models => {
    Riff.belongsTo(models.User)
    Riff.hasMany(models.Like)
    Riff.hasMany(models.Comment)
  }

  return Riff
}

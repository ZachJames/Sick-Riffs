module.exports = (sequelize, types) => {
  const Like = sequelize.define(
    'Like',
    {
      liked: {
        type: types.BOOLEAN,
        allowNull: true,
      },
    },
    {}
  )

  Like.associate = models => {
    Like.belongsTo(models.User)
    Like.belongsTo(models.Riff)
  }

  return Like
}

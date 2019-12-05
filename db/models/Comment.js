module.exports = (sequelize, types) => {
  const Comment = sequelize.define(
    'Comment',
    {
      text: {
        type: types.TEXT,
        allowNull: false,
      },
    },
    {}
  )

  Comment.associate = models => {
    Comment.belongsTo(models.Riff)
    Comment.belongsTo(models.User)
  }

  return Comment
}

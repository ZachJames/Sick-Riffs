const { User } = require('../db/models')

exports.registerUser = async (req, res, next) => {
  try {
    await User.create({
      username: req.body.username,
      password: req.body.password,
    })

    res.status(200).json({ status: 'ok' })
  } catch (err) {
    return next(err)
  }
}

const { Riff } = require('../db/models')

exports.getRiffs = async (req, res, next) => {
  try {
    const riffs = await Riff.findAll({ order: [['created_at', 'DESC']] })
    res.status(200).json({ status: 'ok', riffs })
  } catch (err) {
    next(err)
  }
}

exports.errorHandler = (err, req, res, next) => {
  console.error('Request Error!')
  console.error(err)
  res.status(500).json({ status: 'error', error: 'Something went wrong' })
}

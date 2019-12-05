const express = require('express')

const { connectToDatabase } = require('./db')

let retryCount = 0

const startServer = async () => {
  const app = express()

  try {
    await connectToDatabase()
  } catch (err) {
    console.error(err)
    if (retryCount < 3) {
      console.log('> Retrying in 3 seconds...')
      setTimeout(startServer, 3000)
      retryCount++
      return
    }
    process.exit(1)
  }

  // app.use('/api', routes)

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => console.log(`> Server live on port ${PORT}.`))
}

startServer()

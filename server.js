process.env.NODE_ENV !== 'production' && require('dotenv').config()

const express = require('express')

const routes = require('./routes')
const { connectToDatabase } = require('./db')
const { errorHandler } = require('./middleware')

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

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  app.use('/api', routes)
  app.use(errorHandler)

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => console.log(`> Server live on port ${PORT}.`))
}

startServer()

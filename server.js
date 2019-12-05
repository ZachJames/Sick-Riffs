const express = require('express')

const startServer = async () => {
  const app = express()

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => console.log(`> Live on port ${PORT}.`))
}

startServer()

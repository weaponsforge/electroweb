const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

const webapp = () => {
  app.use(express.static(path.resolve(__dirname, 'public')))

  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
  })
}

module.exports = webapp

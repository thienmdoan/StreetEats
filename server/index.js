const express = require('express')
const bodyParser = require('body-parser')
const { PORT } = process.env


express()
  .use(express.static(`${__dirname}/public`))
  .use(bodyParser.json())
  .listen(PORT || 3000, () => {
    console.log(`Listening on port ${PORT || 3000}`) // eslint-disable-line
  })

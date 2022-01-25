const express = require('express')
const app = express()
require('./endpoints')(app)

const port = 12345

app.listen(port, () =>
  console.log(`Listening on http://localhost:${port}`)
)
const search = require('./search')

module.exports = (app) => {
  app.get('/', (req, res) => {
    search.get(req, res)
    // Schema? Validation? Error handling? See example: https://github.com/TomFirth/nodeApi/blob/master/controllers/get.js
  })
}
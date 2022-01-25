const fs = require('fs')
const { parse } = require('csv-parse')

const search = module.exports = {}

search.get = async (req, res) => {
  let csvData = []
  // get data from csv
  fs.createReadStream('./data.csv')
    .pipe(parse({ columns: true, delimiter: "," }))
    .on('error', error => {
      console.error(error)
    })
    .on('data', csvrow => {
        csvData.push(csvrow)     
    })
    .on('end', () => {
      // clean cheeky data and try to not send anyone to a closed venue!
      csvData.forEach((venue, index) => {
        if (venue.category == "Closed venues" || isNaN(venue.stars_beer) || isNaN(venue.stars_value)) {
          csvData.splice(index, 1)
        }
      })
      // sort by request
      if (req.url.indexOf('/?s=') > -1) {
        const query = req.url.replace('/?s=', '')
        if (query == "beer") {
          csvData.sort((a, b) => {
            if (a.stars_beer > b.stars_beer) {
              return -1
            }
          })
        } else if (query == "value") {
          csvData.sort((a, b) => {
            if (a.stars_value > b.stars_value) {
              return -1
            }
          })
        }
      }
      // return top 10 results
      res.status(200).send(csvData.slice(0, 10))
    })
}
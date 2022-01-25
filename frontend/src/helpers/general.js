import axios from 'axios'

const api = async (sort = "") => {
  // make request to the Leeds' bible of beer venues
  let query
  if (sort != "") { query = "?s=" }
  await axios.get(`http://localhost:12345/${query}${sort}`, {})
  .then(results => {
    // api returns 10 results
    // default response with no param provides random venues
    // ?s=beer provides 5* beer rated venues ascending
    // ?s=value provides 5* value rated venues ascending
    this.setState({
      results
    })
  })
  .catch(error => {
    console.error(error)
  })
}

const stars = (rating = "0.0") => {
  const stars = rating.split(".")
  let output = ""
  // full stars
  for (let i = 0; i < stars[0]; i++) {
    output += "<i class=\"gold fas fa-star\"></i>"
  }
  // every point (..or half) counts
  if (stars[1]) output += "<i class=\"gold fas fa-star-half-alt\"></i>"
  // room to improve - remove this if you just want to show complete/partial stars
  if (stars[0] < 5) {
    let partial = 0
    if (stars[1] > 0 ) partial = 1
    const roomToImprove = 5 - partial - stars[0]
    for (let i = 0; i < roomToImprove; i++) {
      output += "<i class=\"gold far fa-star\"></i>"
    }
  }
  return output
}

export default {
  api,
  stars
}
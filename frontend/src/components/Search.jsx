import React from 'react'
import { Sort } from '.'

class Search extends React.Component {
  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this)
    this.api = this.props.api.bind(this)
  }

  // handleChange(event) {
  //   this.setState({ results: this.props.api(event.target.value) })
  // }

  render () {
    return (
      <Search>
        <Sort api={this.props.api} />
        {/* Maybe someone broke production and I want to recommend a 1* beer venue: 
        <form>
          <input type="text" name="name" placeholder="Name" />
          <label>Beer
            <select name="stars_beer" onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </form> */}
      </Search>
    )
  }
}

export default Search
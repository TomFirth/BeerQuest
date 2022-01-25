import React from 'react'

class Sort extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.api = this.props.api.bind(this)
  }

  componentDidMount() {
    if (!this.state.results.length) {
      this.setState({
        results: this.props.api()
      })
    }
  }

  handleChange(event) {
    this.setState({ results: this.props.api(event.target.value) })
  }

  render () {
    return (
      <form onChange={this.handleChange}>
        <label>Sort
          <select name="sort">
            {/* <option value="distance">Distance</option> */}
            <option value="beer">Beers (High - Low)</option>
            <option value="value">Value (High - Low)</option>
          </select>
        </label>
      </form>
    )
  }
}

export default Sort
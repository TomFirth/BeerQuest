import React from 'react'
import { Result } from '.'

class Results extends React.Component {
  state = {
    results: []
  }

  render () {
    const hasPubs = this.props.results.length > 0
    return (
      <React.Fragment>
        <React.Fragment>
          {hasPubs ?
            <React.Fragment>
              <p>Total Results: {this.props.results.length || 0}</p>
              <div className="results">
                <p></p>
                <p>Name</p>
                <p>Beer</p>
                <p>Value</p>
              </div>
              {this.props.results.map(result => {
                <Result
                  pub={result}
                />
              })}
            </React.Fragment>
          : 
          <React.Fragment>
            <p>No results! I know there are beers out there for you! Please try again.</p>
          </React.Fragment>}
        </React.Fragment>
      </React.Fragment>
    )
  }
}

export default Results
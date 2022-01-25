import React from 'react'

class Result extends React.Component {
  render () {
    return (
      <React.Fragment
        onClick={(e) => {
          this.props.handleSelected(this.props.isSelected)
        }}>
        <img src={this.props.pub.image} alt={this.props.pub.name} title={this.props.pub.name} />
        <p>{this.props.pub.name}</p>
        <p>{this.props.pub.stars_beer}</p>
        <p>{this.props.pub.stars_value}</p>
      </React.Fragment>
    )
  }
}

export default Result
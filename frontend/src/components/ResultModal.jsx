import React from 'react'
import Modal from 'react-modal'

class Result extends React.Component {
  render () {
    return (
      <Modal 
        contentLabel={this.props.pub.name}
        isOpen={Boolean(this.props.isOpen)}
        onRequestClose={this.props.pub.handleClearSelectedAction}
        closeTimeoutMS={200}
        className='modal'
      >
        <img className="modal image" src={this.props.pub.image} alt={this.props.pub.name} title={this.props.pub.name} />
        <span className="fas fa-times" onClick={this.props.pub.handleClearSelectedAction}></span>
        <h3>{this.props.pub.name}</h3>
        <section className="contact">
          <p className="phone">
            <span className="icon fas fa-phone-square-alt" aria-hidden="true"></span>
            <span className="icon-text"><a href="tel:{this.props.pub.pub.phoneNumber}">{this.props.pub.phoneNumber}</a></span>
          </p>
          <p className="map">
            <a href=""><i className="fas fa-map-marker-alt"></i></a>
          </p>
          <p className="address">
            {this.props.pub.address}
          </p>
        </section>
        <section className="modal stars">
          <p className="stars">
            <span>Beer</span>
            {this.props.stars(this.props.pub.stars_beer)}
          </p>
          <p className="stars">
            <span>Atmosphere</span>
            {this.props.stars(this.props.pub.stars_atmosphere)}
            </p>
          <p className="stars">
            <span>Amenities</span>
            {this.props.stars(this.props.pub.stars_amenities)}
            </p>
          <p className="stars">
            <span>Value</span>
            {this.props.stars(this.props.pub.stars_value)}
            </p>
        </section>
        <section className="modal excerpt">{this.props.pub.excerpt}</section>
        <section className="modal tags">{this.props.pub.tags}</section>
        <button className='button' onClick={this.props.handlepub}>Okay</button>
      </Modal>
    )
  }
}

export default Result
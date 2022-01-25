import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      // This also might look familiar
      <footer className="main-footer fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-7">
              <p className="company-name">X-Lab Limited</p>
              <div className="address">
                <p>Suite C10, Joseph's Well</p>
                <p>Hanover Walk, Leeds</p>
                <p>LS3 1AB</p>
              </div>
            </div>
            <div className="col-xs-10 col-sm-5 col-md-4">
              <div className="contact-methods-container">
                <div className="contact-method">
                  <span className="icon fas fa-phone-square-alt"></span>
                  <span className="icon-text">+44 (0) 113 226 5505</span>
                </div>
                <div className="contact-method">
                  <span className="icon fas fa-envelope"></span>
                  <span className="icon-text">enquiries@x-labsystems.co.uk</span>
                </div>
                <div className="contact-method">
                  <span className="icon fab fa-twitter"></span>
                  <span className="icon-text">@XLab_ltd</span>
                </div>
                <div className="privacy-notice">
                  <a href="/Privacy">Privacy Notice</a>
                </div>
              </div>
            </div>
            <div className="col-xs-2 col-sm-1">
              <div className="scroll-top-arrow">
                <img src="https://www.x-labsystems.co.uk/images/footer/top-scroll-arrow.svg" alt="Arrow to Scroll to Top of Page" />
              </div>
            </div>
        </div>
    </div>
</footer>
    )
  }
}

export default Footer
import React from 'react'

class Header extends React.Component {
  render () {
    return (
      // This might look familiar
      <div className="header">
        <nav className="navbar">
          <div className="row fixed-mobile-header">
            <div className="col-xs-4 mobile-logo">
              <a href="/"><img className="logo" src="/images/logo-green.png" /></a>
            </div>
          </div>
          <div className="sticky-nav row collapse navbar-collapse " id="my-navbar-collapse">
            <div className="desktop-logo">
                <a href="/"><img src="https://www.x-labsystems.co.uk/images/logo-green.png" alt="X-Lab logo" /></a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
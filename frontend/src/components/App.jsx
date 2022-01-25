import React from 'react'
import { Footer, Header, ResultModal, Results, Search } from '.'
import general from '../helpers/general'

class App extends React.Component {
  constructor (props) {
    super(props)
    // this.handleSelected = this.handleSelected.bind(this)
    this.api = general.api.bind(this)
    this.stars = general.stars.bind(this)
    this.state = {
      results: [],
      pub: {},
      isOpen: undefined
    }
  }

  // componentDidMount() {
  //   try {
  //     const json = window.localStorage.getItem('pub')
  //     const pub = JSON.parse(json)
  //     if (pub) {
  //       this.setState(() => ({ pub }))
  //     }
  //   } catch (error) {
  //     console.error('componentDidMount', error)
  //   }
  // }

  // handleSelected (e) {
  //   e.preventDefault()
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   }, () => {
  //       this.props.onClick(this.state.isOpen)
  //   })
  // }

  render() {
    return (
      <React.Fragment>
        <ResultModal
          stars={this.stars}
          pub={this.state.pub}
        />
        {/* <Header /> */}
        <div className="body-content">
          <Search api={this.api} />
          <Results
            // handleSelected={this.handleSelected}
            stars={this.stars}
            results={this.state.results} />
        </div>
        {/* <Footer /> */}
      </React.Fragment>
    )}
}

export default App
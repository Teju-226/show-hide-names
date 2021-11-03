import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    displayFirstname: false,
    displayLastname: false,
  }

  showFirstname = () => {
    this.setState(prevState => ({
      displayFirstname: !prevState.displayFirstname,
    }))
  }

  showLastname = () => {
    this.setState(prevState => ({displayLastname: !prevState.displayLastname}))
  }

  render() {
    const {displayFirstname, displayLastname} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div className="first-name-container">
            <button className="button" onClick={this.showFirstname}>
              Show/Hide Firstname
            </button>
            {displayFirstname && <p className="first-name">Joe</p>}
          </div>
          <div className="second-name-container">
            <button className="button" onClick={this.showLastname}>
              Show/Hide Lastname
            </button>
            {displayLastname && <p className="last-name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

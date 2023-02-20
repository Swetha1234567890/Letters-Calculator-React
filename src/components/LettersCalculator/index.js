// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onUserInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const count = searchInput.length
    return (
      <div className="background">
        <div className="text-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label className="para" htmlFor="input-text">
            Enter the phrase
          </label>
          <input
            type="text"
            className="input"
            placeholder="Enter the phrase"
            value={searchInput}
            onChange={this.onUserInput}
            id="input-text"
          />
          <p className="count">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="img"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator

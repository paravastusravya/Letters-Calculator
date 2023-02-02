// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you Enter</h1>
            <label htmlFor="inputEl" className="label-text">
              Enter the Phrase
            </label>
            <input
              type="text"
              placeholder="enter the phrase"
              id="inputEl"
              className="input"
              onChange={this.onChangeInputPhrase}
            />
            <div className="count-container">
              <p className="letters-count">
                No.of letters: {inputPhrase.length}
              </p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

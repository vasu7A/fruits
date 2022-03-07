// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  onIncrementm = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onIncrementb = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main-bg">
        <div className="card">
          <h1 className="heading">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="arrange">
            <div className="arrange-inner">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img-size"
              />
              <div>
                <button
                  className="button-style"
                  type="button"
                  onClick={this.onIncrementm}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="arrange-inner">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img-size"
              />
              <div>
                <button
                  className="button-style"
                  type="button"
                  onClick={this.onIncrementb}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

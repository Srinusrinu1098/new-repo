import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      if (prevState.count < 200) {
        const newCount = prevState.count + 10
        return {count: newCount}
      }
      return prevState
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        const newCount = prevState.count - 10
        return {count: newCount}
      }
      return prevState
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-bg">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="bg-container"
        />
        <h1 className="heading">Speed is {count}mph</h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" className="button" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button type="button" className="button1" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer

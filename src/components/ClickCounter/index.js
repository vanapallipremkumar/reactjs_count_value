// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  increase = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">The Button has been clicked</h1>
        <h1 className="heading">
          <span className="count">{count}</span> times
        </h1>
        <p>Click the button to increase the count!</p>
        <button
          type="button"
          className="click-me-button"
          onClick={this.increase}
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter

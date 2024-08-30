// Write your code here
import {Component} from 'react'
import './index.css'

const HEAD_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    resultImage: HEAD_IMG_URL,
    totalCount: 0,
    headCount: 0,
    tailCount: 0,
  }

  onclickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
      this.setState(prevState => ({resultImage: HEAD_IMG_URL}))
    } else {
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
      this.setState(prevState => ({resultImage: TAIL_IMG_URL}))
    }
  }

  render() {
    const {resultImage, totalCount, headCount, tailCount} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="img" src={resultImage} alt="toss result" />
          <button className="button" onClick={this.onclickToss}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result-para">Total:{headCount + tailCount}</p>
            <p className="result-para">Heads:{headCount}</p>
            <p className="result-para">Tails:{tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

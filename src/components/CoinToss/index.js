// Write your code here
import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    total: 0,
    img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTossCoin = () => {
    const randomNum = Math.floor(Math.random() * 2)
    console.log(randomNum)
    this.setState(prevState => {
      if (randomNum === 0) {
        return {
          heads: prevState.heads + 1,
          total: prevState.total + 1,
          img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        }
      }
      return {
        tails: prevState.tails + 1,
        total: prevState.total + 1,
        img: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }
    })
  }

  render() {
    const {heads, tails, total, img} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="coin-heading">Coin Toss Game</h1>
          <p className="coin-para">Heads (or) Tails</p>
          <img className="coin-image" src={img} alt="toss result" />
          <button
            type="button"
            className="coin-btn"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="change">Total: {total}</p>
            <p className="change">Heads: {heads}</p>
            <p className="change">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

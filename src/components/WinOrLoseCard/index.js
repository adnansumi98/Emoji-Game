import './index.css'
const WinorLoseCard = props => {
  const { win, score, onClick } = props

  return (
    <div className="result-container">
      <div className="result">
        <h1 className="result-heading">{win ? "You Won" : "You Lose"}</h1>
        <p className="best-score">Best Score</p>
        <p className="score">{score}/12</p>
        <button className="play-again" onClick={() => onClick()}> Play Again</button>
      </div>
      {win ? <img src="https://assets.ccbp.in/frontend/react-js/won-game-img.png" className="result-image" alt="won" /> : <img src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" className="result-image" alt='lost' />}
    </div>
  )
}

export default WinorLoseCard
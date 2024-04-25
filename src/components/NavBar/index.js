import './index.css'

const NavBar = props => {
  const { score, topScore } = props
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo-container">
          <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" alt="emoji logo" />
          <p className="game-title">Emoji game</p>
        </div>
        <div className="score-container">
          <p className="score-card">Score:{score}</p>
          <p className="topscore-card">Top Score:{topScore}</p>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
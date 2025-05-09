import './index.css'

const NavBar = props => {
  const {topScore, score, isgameOver} = props
  return (
    <div className="nav">
      <div className="con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="nav-text">Emoji Game</h1>
      </div>
      {!isgameOver ? (
        <div className="con">
          <p className="nav-text">Score: {score}</p>
          <p className="nav-text">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default NavBar

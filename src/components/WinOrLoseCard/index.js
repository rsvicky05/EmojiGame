import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props
  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const text = score === 12 ? 'Won' : 'Lose'
  const isBest = score === 12 ? 'Best Score' : 'Score'

  const play = () => {
    playAgain()
  }

  return (
    <div className="result-container">
      <div className="result-sub">
        <h1 className="res-head">You {text}</h1>
        <p className="res-score">{isBest}</p>
        <p className="score">{score}/12</p>
        <button className="play-btn" type="button" onClick={play}>
          Play Again
        </button>
      </div>
      <img className="image" src={imgUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard

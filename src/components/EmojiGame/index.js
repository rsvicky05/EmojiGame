/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    top: 0,
    previousIds: [],
    isgameOver: false,
  }

  shuffleCards = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickCard = id => {
    this.setState(prev => {
      if (prev.previousIds.includes(id)) {
        return {isgameOver: true}
      }
      if (prev.score + 1 === 12) {
        return {score: prev.score + 1, isgameOver: true}
      }
      return {score: prev.score + 1, previousIds: [...prev.previousIds, id]}
    })
  }

  playAgain = () => {
    this.setState(prev => {
      if (prev.top < prev.score) {
        return {score: 0, top: prev.score, previousIds: [], isgameOver: false}
      }
      return {score: 0, top: prev.top, previousIds: [], isgameOver: false}
    })
  }

  render() {
    const emojisList = this.shuffleCards()
    const {score, top, isgameOver} = this.state

    return (
      <div className="bg-con">
        {isgameOver ? (
          <NavBar isgameOver={isgameOver} />
        ) : (
          <NavBar score={score} topScore={top} isgameOver={isgameOver} />
        )}
        <div className="game-container">
          {isgameOver ? (
            <WinOrLoseCard
              score={score}
              topScore={top}
              playAgain={this.playAgain}
            />
          ) : (
            <ul className="cards">
              {emojisList.map(each => (
                <EmojiCard
                  emojiDetails={each}
                  key={each.id}
                  onClickCard={this.onClickCard}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame

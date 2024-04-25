/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import NavBar from "./Component/NavBar"
import WinOrLoseCard from "./Component/WinOrLoseCard"
import EmojiCard from "./Component/EmojiCard"
import { Component } from "react"
import './index.css'

class EmojiGame extends Component {

  state = {
    win: false,
    isGameStarted: false,
    emojisList: this.props.emojisList,
    score: 0,
    topScore: 10

  }

  restartGame = () => {
    this.setState(prevState => ({ ...prevState, isGameStarted: !prevState.isGameStarted }))
  }

  renderGameContent = props => {
    const { isGameStarted, emojisList } = this.state
    if (isGameStarted) {
      return (
        <div className="game-content">
          {
            emojisList.map(eachitem => {
              const { id, emojiName, emojiUrl } = eachitem
              return (<EmojiCard id={id} emojiName={emojiName} emojiUrl={emojiUrl} />)
            })
          }
        </div>
      )
    } else {
      <div className="game-content">
        <WinOrLoseCard win={win} score={score} onClick={restartGame} />
      </div>
    }
  }

  render() {
    const { win, isGameStarted, emojisList, score, topScore } = this.state

    return (
      <div className="main-container">
        <NavBar score={score} topScore={topScore} />
        {this.renderGameContent()}
        <h1>Hello World</h1>
      </div>
    )
  }

}

export default EmojiGame
import "./index.css"

const EmojiCard = props => {
  const { id, emojiName, emojiUrl } = props

  return (
    <div className="emoji-container">
      <img className="emoji-image" src={emojiUrl} alt={emojiName} />
    </div>
  )
}

export default EmojiCard
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickCard} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onClickEmoji = () => {
    onClickCard(id)
  }

  return (
    <li className="card-con">
      <button type="button" className="emoji" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="each-emoji" />
      </button>
    </li>
  )
}

export default EmojiCard

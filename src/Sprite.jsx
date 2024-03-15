import PropTypes from 'prop-types'

const Sprite = ({ type, position, onKeyDown }) => {
  let imgSrc
  switch (type) {
    case 'player':
      imgSrc = 'player.png'
      break
    case 'enemy':
      imgSrc = 'invader1.gif'
      break
    case 'bullet':
      imgSrc = 'bullet.png'
      break
    default:
      imgSrc = 'error.png'
  }

  return (
    <img 
      style={{
        outline: 'none',
        width: '40px',
        height: '40px',
        imageRendering: 'pixelated',
        gridColumnStart: position.x + 1,
        gridRowStart: position.y + 1,
      }}
      src={imgSrc}
      onKeyDown={onKeyDown}
      tabIndex={-1}
    />
  )
}

Sprite.propTypes = {
  type: PropTypes.oneOf(['enemy', 'bullet', 'player']).isRequired,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }).isRequired,
  onKeyDown: PropTypes.func
}

export default Sprite

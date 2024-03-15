import Sprite from './Sprite'
import PropTypes from 'prop-types'

const Player = ({ position, changePos }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      changePos('left')
    }
    if (event.key === 'ArrowRight') {
      changePos('right')
    }
   }

  return (
    <Sprite type="player" position={position} onKeyDown={handleKeyDown} />
  )
}

Player.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  changePos: PropTypes.func
}


export default Player

import { useEffect } from 'react'
import Sprite from './Sprite'
import PropTypes from 'prop-types'

const Enemy = ({ id, position, changePos }) => {
  useEffect(() => {
    setInterval(() => {
      changePos(id)
    }, 2000)
  }, [])

  return (
    <Sprite type="enemy" position={position} />
  )
}

Enemy.propTypes = {
  id: PropTypes.number.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }).isRequired,
  changePos: PropTypes.func
}


export default Enemy

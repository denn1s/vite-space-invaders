import { useState } from 'react'
import Player from './Player'
import Enemy from './Enemy'
import './Game.css'

const Game = () => {
  const [ pPos, setPPos ] = useState({ x: 4, y: 9})
  const [ enemies, setEnemies ] = useState([
    { id: 1, x: 1, y: 1 },
    { id: 2, x: 3, y: 1 },
    { id: 3, x: 5, y: 1 }
  ])

  const changePlayerPos = (direction) => {
    const pos = { ...pPos } 

    if (direction === 'left' && pos.x > 0) {
      pos.x -= 1  
    } else if (direction === 'right' && pos.x < 9) {
      pos.x += 1
    }

    setPPos(pos)
  }

  const changeEnemyPos = (enemyId) => {
    const enemyIndex = enemies.findIndex((enemy) => enemy.id === enemyId)
    const enemiesCopy = [...enemies]
    const enemy = enemiesCopy[enemyIndex]

    if (enemy.x <= 7) {
      enemy.x += 1
    } else {
      enemy.x = 1
      enemy.y += 1
    }

    setEnemies(enemiesCopy)
  }

  return (
    <div className="space">
      {enemies.map((enemy) => <Enemy key={enemy.id} id={enemy.id} position={enemy} changePos={changeEnemyPos} />)}
      <Player position={pPos} changePos={changePlayerPos} />
    </div>
  )
}

export default Game

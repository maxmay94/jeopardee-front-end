import React, { useState, useEffect } from 'react'

const GameBoard  = (props) => {

  console.log(props)
  props.startGame()

  return(
    <div>
      <h1>NEW GAME</h1>
    </div>
  )
}

export default GameBoard
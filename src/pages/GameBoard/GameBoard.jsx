import React, { useState, useEffect } from 'react'
import QuestionCard from '../../components/QuestionList/QuestionCard'

const GameBoard  = (props) => {

  const[questions, setQuestions] = useState([{}])

  useEffect(() => {
    const fetchAllQuestions = async() => {
      const questionData = await props.startGame()
      setQuestions(questionData)
    }
    fetchAllQuestions()
  }, [])

  console.log('Game Questions ~~~>> ',questions)


  return(
    <div>
      <h1>NEW GAME</h1>
      <QuestionCard  />
    </div>
  )
}

export default GameBoard
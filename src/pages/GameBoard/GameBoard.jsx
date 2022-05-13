import React, { useState, useEffect } from 'react'
import QuestionCard from '../../components/QuestionList/QuestionCard'
import TitleCard from '../../components/QuestionList/TitleCard'

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
      {
        questions.map((question, i) => (
          <div key={i}>
            <TitleCard title={question}/>
            <QuestionCard />
          </div>
        ))
      }
    </div>
  )
}

export default GameBoard
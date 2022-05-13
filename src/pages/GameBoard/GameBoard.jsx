import React, { useState, useEffect } from 'react'
import QuestionCard from '../../components/QuestionList/QuestionCard'
import TitleCard from '../../components/QuestionList/TitleCard'

const GameBoard  = (props) => {

  const[allQuestions, setAllQuestions] = useState([{}])

  useEffect(() => {
    const fetchAllQuestions = async() => {
      const questionData = await props.startGame()
      setAllQuestions(questionData)
    }
    fetchAllQuestions()
  }, [])

  console.log('Game Questions ~~~>> ',allQuestions)

  return(
    <div>
      {
        allQuestions.map((questions, i) => (
          <div key={i}>
            <TitleCard title={questions}/>
            {
              questions[i] &&
                questions?.map((question, j) => (
                  question && <QuestionCard question={question}/>
                ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default GameBoard
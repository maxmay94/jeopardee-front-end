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

  return(
    <div>
      {
        allQuestions.map((questions, i) => (
          <div className='bg-yellow-800 m-10 rounded' key={i}>
            <TitleCard title={questions}/>
            {
              questions[i] &&
                questions?.map((question, j) => (
                  question &&
                  <div key={j}>
                    <QuestionCard question={question}/>
                  </div> 
                ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default GameBoard
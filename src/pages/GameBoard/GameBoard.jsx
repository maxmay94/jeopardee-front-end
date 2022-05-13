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

  console.log(allQuestions)

  return(
    <div className='bg-slate-400'>
      <div className='w-fit h-fit flex '>
        {
          allQuestions ? 
          allQuestions.map((questions, i) => (
            <div className='bg-yellow-800 my-10 rounded border-2 border-yellow-500' key={i}>
              <TitleCard title={questions}/>
              {
                questions.length > 1 &&
                  questions?.map((question, j) => (
                    question &&
                    <div key={j}>
                      <QuestionCard question={question}/>
                    </div> 
                  ))
              }
            </div>
          ))
          :
          <div>
            <h1>Loading...</h1>
          </div>
        }
      </div>
    </div>
  )
}

export default GameBoard
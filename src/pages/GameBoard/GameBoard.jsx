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
    <div className='bg-slate-400 flex'>
      <div className='w-50 h-fit flex'>
        {
          allQuestions ? 
          allQuestions.map((questions, i) => (
            <div className='bg-blue-800 rounded border-2 border-black w-1/6' key={i}>
              <TitleCard title={questions} className='h-1/6 border-black'/>
              {
                questions.length > 1 &&
                  questions?.map((question, j) => (
                    question &&
                    <div key={j} className='h-1/6  '>
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
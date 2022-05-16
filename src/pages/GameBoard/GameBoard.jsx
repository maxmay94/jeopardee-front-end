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
    <div className='flex'>
      <div className='w-50 flex w-screen h-screen'>
        {
          allQuestions ? 
          allQuestions.map((questions, i) => (
            <div className='bg-blue-900 border-2 border-black w-1/6' key={i}>
              <TitleCard title={questions}/>
              {
                questions.length > 1 ?
                  questions?.map((question, j) => (
                    question &&
                    <div key={j} className='h-1/6'>
                      <QuestionCard question={question}/>
                    </div> 
                  ))
                  :
                  <div className='font-black absolute inset-0 z-10 w-screen h-scren bg-blue-900 text-yellow-500 text-9xl drop-shadow-xl text-center'>
                    <h1>LOADING...</h1>
                  </div>
              }
            </div>
          ))
          :
          <div className='font-black absolute inset-0 z-10 w-screen h-scren bg-blue-900 text-yellow-500 text-9xl drop-shadow-xl text-center'>
            <h1>ERROR...</h1>
          </div>
        }
      </div>
    </div>
  )
}

export default GameBoard
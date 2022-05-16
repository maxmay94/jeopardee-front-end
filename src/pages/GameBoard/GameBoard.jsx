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
      <div className='w-50 flex w-screen h-screen border-black'>
        {
          allQuestions ? 
          allQuestions.map((questions, i) => (
            <div className='bg-blue-800 rounded border-2 border-black w-1/6' key={i}>
              <TitleCard title={questions}/>
              {
                questions.length > 1 ?
                  questions?.map((question, j) => (
                    question &&
                    <div key={j} className='h-1/6 border-black my-2'>
                      <QuestionCard question={question}/>
                    </div> 
                  ))
                  :
                  <div className='text-center align-middle font-extrabold text-6xl text-yellow-500'>
                    <h1>LOADING...</h1>
                  </div>
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
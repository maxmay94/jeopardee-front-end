import React, { useState, useEffect } from 'react'

const QuestionCard = (props) => {

  const[questionPicked, setQuestionPicked] = useState(0)

  useEffect(() => {
    setQuestionPicked(0)
  },[])

  const clickQuestion = () => {
    setQuestionPicked(questionPicked + 1)
  }

  return(
    <>
    {
      questionPicked === 0 ?

        <div className='rounded-sm text-center h-full drop-shadow-lg'>
            <button className='h-full w-full border-y-2 border-y-black' onClick={clickQuestion}>
              <h1 className='text-yellow-500 font-black text-xl md:text-2xl lg:text-4xl xl:text-6xl drop-shadow-lg'>${props.question.difficulty}</h1>
            </button>   
        </div>
      :
      questionPicked === 1 ?

        <div className='absolute inset-0 z-10 w-screen h-scren bg-blue-900'>
          <div className='text-white text-2xl md:text-3xl lg:text-6xl xl:text-8xl rounded-sm text-center h-full drop-shadow-lg'>
            <button className='h-full w-full border-y-2 border-y-black p-5'  onClick={clickQuestion}>
              <h1 className='font-black drop-shadow-lg underline underline-offset-4'>Question:</h1>
              <br />
              <h1 className='font-black drop-shadow-lg text-yellow-500'>{props.question.question}</h1>
            </button>
          </div>
        </div>

      :
      questionPicked === 2 ?

        <div className='absolute inset-0 z-10 w-screen h-scren bg-blue-900'>
          <div className='text-white font-black text-2xl md:text-3xl lg:text-6xl xl:text-8xl rounded-sm text-center h-full' >
            <button  className='h-full w-full border-y-2 border-y-black p-5' onClick={clickQuestion}>
              <h1 className='font-black drop-shadow-lg underline underline-offset-4'>Answer:</h1>
              <br />
              <h1 className='font-black drop-shadow-lg text-yellow-500 '>{props.question.answer}</h1>
            </button>
          </div>
        </div>
      :
        <div className='rounded-sm text-center h-full drop-shadow-lg border-y-2 border-y-black'></div>
    }
    </>
  )
}

export default QuestionCard
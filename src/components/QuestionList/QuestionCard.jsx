import React, { useState, useEffect } from 'react'

const QuestionCard = (props) => {

  const[questionPicked, setQuestionPicked] = useState(0)

  useEffect(() => {
    setQuestionPicked(0)
  },[])

  console.log(questionPicked)

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
              {/* <h1>Question: {props.question.question}</h1>
              <h1>Answer: {props.question.answer}</h1> */}
              <br />
            </button>   
        </div>
      :

      questionPicked === 1 ?
        <div className='text-white font-black text-2xl rounded-sm text-center h-full drop-shadow-lg'>
          <button className='h-full w-full border-y-2 border-y-black'  onClick={clickQuestion}>
            <h1>{props.question.question}</h1>
          </button>
        </div>

      :
      questionPicked === 2 ?
        <div className='text-white font-black text-3xl rounded-sm text-center h-full drop-shadow-lg' >
          <button  className='h-full w-full border-y-2 border-y-black' onClick={clickQuestion}>
            <h1>{props.question.answer}</h1>
          </button>
        </div>
      :

        <div className='rounded-sm text-center h-full drop-shadow-lg border-y-2 border-y-black'>

        </div>
    }
    </>
  )
}

export default QuestionCard
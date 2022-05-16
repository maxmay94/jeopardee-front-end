import React from 'react'

const QuestionCard = (props) => {
  return(
    <div className='bg-blue-800 mx-5 my-2 rounded-sm text-center h-full drop-shadow-lg'>
      <button className='h-full w-full'>
        <h1 className='text-yellow-600 font-black text-6xl drop-shadow-lg'>${props.question.difficulty}</h1>
        {/* <h1>Question: {props.question.question}</h1>
        <h1>Answer: {props.question.answer}</h1> */}
        <br />
      </button>   
    </div>
  )
}

export default QuestionCard
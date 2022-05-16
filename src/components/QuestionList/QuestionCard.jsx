import React from 'react'

const QuestionCard = (props) => {
  return(
    <div className='bg-blue-600 mx-5 my-2 rounded text-center border-black h-full'>
      <button className=''>
        <h1 className='text-yellow-600 font-black text-2xl align-middle'>${props.question.difficulty}</h1>
        {/* <h1>Question: {props.question.question}</h1>
        <h1>Answer: {props.question.answer}</h1> */}
        <br />
      </button>   
    </div>
  )
}

export default QuestionCard
import React from 'react'

const QuestionCard = (props) => {
  return(
    <button className='h-full w-full align-middle'>
      <div className='bg-blue-600 mx-5 my-2 rounded-sm text-center border-black h-full'>
        <h1 className='text-yellow-600 font-black text-2xl'>${props.question.difficulty}</h1>
        {/* <h1>Question: {props.question.question}</h1>
        <h1>Answer: {props.question.answer}</h1> */}
        <br />
      </div>
    </button>   
  )
}

export default QuestionCard
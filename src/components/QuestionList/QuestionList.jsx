import React from 'react'

const QuestionList = (props) => {
  console.log('QuestionList props -----> ', props)

  return (
    <div className='w-10 h-10 bg-slate-600'>
        <p>Question: {props.question}</p>
        <p>Answer: {props.answer}</p>
    </div>
  )
}

export default QuestionList
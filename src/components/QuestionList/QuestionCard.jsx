import React from 'react'

const QuestionCard = (props) => {

  console.log('question -->>', props)

  return(
    <div className='bg-blue-400 m-5 rounded text-center'>
      <h1>{props.question.difficulty}$</h1>
      <h1>Question: {props.question.question}</h1>
      <h1>Answer: {props.question.answer}</h1>
      <br />
    </div>
  )
}

export default QuestionCard
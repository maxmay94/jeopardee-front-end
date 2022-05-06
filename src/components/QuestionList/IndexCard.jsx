import React from 'react'

const IndexCard = (props) => {
  console.log('------* ',props.question._id)
  return (
    <div className='rounded-lg m-5 p-5 w-1/5 bg-slate-700 text-slate-300 text-lg text-left font-medium shadow-2xl'>
      <p>Question:</p>
      <p>{props.question.question}</p>
      <br />
      <p>Answer: </p>
      <p>{props.question.answer}</p>
      <br />
      <p>Category: </p>
      <p>{props.question.category}</p>
      <br />
      <p>Diffictulty: </p>
      <p>{props.question.difficulty}</p>
      <br />
      <button className='text-yellow-400'>edit</button>
      <br />
      <button className='text-red-400'
        onClick={() => props.handleDeleteQuestion(props.question._id)}
      >
        delete
      </button>
      <br />
    </div>
  )
}

export default IndexCard
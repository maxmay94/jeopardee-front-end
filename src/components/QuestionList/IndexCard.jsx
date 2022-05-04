import React from 'react'

const IndexCard = (props) => {
  return (
    <div className='rounded-lg m-5 p-5 w-1/5 bg-slate-700 text-slate-300 text-lg text-left font-medium shadow-2xl'>
      <p>Question:</p>
      <p>{props.question}</p>
      <br />
      <p>Answer: </p>
      <p>{props.answer}</p>
      <br />
      <p>Category: </p>
      <p>{props.category}</p>
      <br />
      <p>Diffictulty: </p>
      <p>{props.difficulty}</p>
      <br />
      <button className='text-yellow-400'>edit</button>
      <br />
      <button className='text-red-400'>delete</button>
      <br />
    </div>
  )
}

export default IndexCard
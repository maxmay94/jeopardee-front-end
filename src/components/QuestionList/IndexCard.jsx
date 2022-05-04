import React from 'react'

const IndexCard = (props) => {
  return (
    <div className='m-5 p-5 w-1/3 bg-blue-600'>
      <p>Question: {props.question}</p>
      <br />
      <p>Answer: {props.answer}</p>
      <br />
      <p>Category: {props.category}</p>
      <br />
      <p>Diffictulty: {props.difficulty}</p>
      <br />
      <button>edit</button>
      <br />
      <button>delete</button>
      <br />
    </div>
  )
}

export default IndexCard
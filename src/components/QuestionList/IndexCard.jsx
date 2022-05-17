import React from 'react'

const IndexCard = (props) => {
  return (
    <div className='flex-wrap rounded-lg p-5 bg-slate-700 text-slate-300 text-lg text-left font-medium shadow-2xl'>
      <div className=''>
        <p className='text-slate-900'>Category: </p>
        <p className='text-2xl'>{props.question.category}</p>
        <br />
        <p className='text-slate-900'>Diffictulty: </p>
        <p className='text-2xl'>{props.question.difficulty}</p>
        <br />
        <p className='text-slate-900'>Question:</p>
        <p className='text-2xl'>{props.question.question}</p>
        <br />
        <p className='text-slate-900'>Answer: </p>
        <p className='text-2xl'>{props.question.answer}</p>
        <br />
        <div className='inline-flex'>
          <button className='text-yellow-200 bg-yellow-700 hover:bg-yellow-600 p-1 m-1 rounded w-16'>edit</button>

          <button className='text-red-200 bg-red-900 hover:bg-red-800 p-1 m-1 rounded w-16'
            onClick={() => props.handleDeleteQuestion(props.question._id)}
          >
            delete
        </button>
        </div>
        <br />
      </div>
    </div>
  )
}

export default IndexCard
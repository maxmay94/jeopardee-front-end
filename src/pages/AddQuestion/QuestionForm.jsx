import React, { Component } from 'react'
import Creatable, { useCreatable } from 'react-select/creatable';

const QuestionForm = (props) => {

  const choice = [1,2,3,4,5,6,7,8,9]
  return (
    <form onSubmit={props.handleAddQuestion}>

      <div className='bg-yellow-600 w-1/3 rounded m-5 p-5'>


        <div>
          <label>Enter Question</label>
        </div>
        <input className='rounded'
          required
          name='question'
          autoComplete='off'
          placeholder='Question'
          value={props.question}
          onChange={(e) => props.setQuestion(e.target.value)}
          />

        <div>
          <label>Enter Answer</label>
        </div>
        <input className='rounded'
          required
          name='answer'
          autoComplete='off'
          placeholder='Answer'
          value={props.question}
          onChange={(e) => props.setAnswer(e.target.value)}
          />

        <div>
          <label>Enter Category</label>
        </div>
        <input 
          required
          name='category'
          autoComplete='on'
          placeholder='Category'
          value={props.category}
          onChange={(e) => props.setCategory(e.target.value)}
        />

      </div>
    </form>
  )
}

export default  QuestionForm
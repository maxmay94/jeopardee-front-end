import React from 'react'

const QuestionForm = (props) => {
  return (
    <form onSubmit={props.handleAddQuestion}>

      <div>
        <label>Enter Question</label>
      </div>
      <input 
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
      <input 
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

    </form>
  )
}

export default  QuestionForm
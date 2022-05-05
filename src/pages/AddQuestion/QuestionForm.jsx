import React, { Component } from 'react'
import CreatableSelect, { useCreatable } from 'react-select/creatable'
import { ActionMeta, OnChangeValue } from 'react-select'
import Select from 'react-select'
// import { CategoryOptions } from './CategoryOptions'

const QuestionForm = (props) => {

  const  handleChange = (newValue, actionMeta) => {
    console.group('~~ Value Changed ~~')
    console.log(newValue)
    console.log(`action: ${actionMeta.action}`)
    console.groupEnd()
  }

  const handleInputChange = (inputValue, actionMeta) => {
    console.group('-- Input Changed --')
    console.log(inputValue)
    console.log(`action: ${actionMeta.action}`)
    console.groupEnd()
  }

  console.log('options ----->>>', props.options)

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
          value={props.answer}
          onChange={(e) => props.setAnswer(e.target.value)}
          />

        <div>
          <label>Enter Category</label>
        </div>
        <CreatableSelect 
          required
          // isClearable
          name='category'
          autoComplete='on'
          placeholder='Category'
          value={props.category}
          options={Object.values(props.options)}
          // options={props.options}
          onInputChange={handleInputChange}
          onChange={handleChange}
          // onChange={(e) => props.setCategory(e.target.value)}
        />
        {/* <input 
          required
          name='category'
          autoComplete='on'
          placeholder='Category'
          value={props.category}
          onChange={(e) => props.setCategory(e.target.value)}
        /> */}

        <div>
          <label>Pick Difficulty</label>
        </div>
        <select name="" id="" className='rounded'>
          <option value="200">200</option>
          <option value="400">400</option>
          <option value="600">600</option>
          <option value="800">800</option>
          <option value="1000">1000</option>
          <option value="1200">1200</option>
          <option value="1600">1600</option>
          <option value="2000">2000</option>
        </select>

        <br />
        <br />
        <button>Add Question</button>

      </div>
    </form>
  )
}

export default  QuestionForm
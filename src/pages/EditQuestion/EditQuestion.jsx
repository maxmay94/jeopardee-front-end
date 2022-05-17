import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOne, getAllCategories } from '../../services/questionService'

const EditQuestion = (props) => {
  const { id } = useParams()
  const [formData, setFormData] = useState({})
  const [options, setOptions] = useState([])

  useEffect(() => {

  },[formData])


  useEffect(() => {
    const fetchData = async() => {
      try{
        const categoryData = await getAllCategories()
        const data = await getOne(id)
        setOptions(categoryData)
        setFormData(data)
      } catch(err) {
        throw err
      }
    }
    fetchData()
  },[])

  console.log(formData)

  return (
    <div className='content-center'>
      <form onSubmit={formData.handleAddQuestion}>

        <div className='bg-yellow-600 w-1/3 rounded m-5 p-5'>

          <div className='m-5'>
            <label>Enter Question</label>
            <input className='rounded w-full h-10'
              required
              name='question'
              autoComplete='off'
              placeholder='Question'
              value={formData.question}
              onChange={(e) => formData.setQuestion(e.target.value)}
              />
          </div>

          <div className='m-5'>
            <label>Enter Answer</label>
            <input className='rounded w-full h-10'
              required
              name='answer'
              autoComplete='off'
              placeholder='Answer'
              value={formData.answer}
              onChange={(e) => formData.setAnswer(e.target.value)}
              />
          </div>

          <div className=''>
            <div className='m-5'>
              <label>Use Existing Category</label>
              <select className='rounded w-full h-10'
                name="category" 
                value={formData.category}
                onChange={(e) => formData.setCategory(e.target.value)} 
                >
                <option  disabled defaultValue={true}>Select a Category</option>
                {
                  options.map((option, i) => 
                  <option key={i} value={option}>
                      {option}
                    </option>
                  )
                }
              </select>
            </div>

            <div className='m-5'>
              <label>Or Create new Category</label>
              <input className='rounded w-full h-10'
                name='category'
                autoComplete='off'
                placeholder='Category'
                value={formData.category}
                onChange={(e) => formData.setCategory(e.target.value)}
                />
            </div>
          </div>

          <div className='m-5'>
            <label>Pick Difficulty</label>
            <select className='rounded w-full h-10'
              name="difficulty" 
              value={formData.difficulty}
              onChange={(e) => formData.setDifficulty(e.target.value)} 
              >
              <option value="200">200</option>
              <option value="400">400</option>
              <option value="600">600</option>
              <option value="800">800</option>
              <option value="1000">1000</option>
            </select>
          </div>
          
          <br />
          <button className='bg-green-800 hover:bg-green-700 p-2 rounded'>Update Question</button>

        </div>
      </form>
    </div>
  )
}

export default  EditQuestion
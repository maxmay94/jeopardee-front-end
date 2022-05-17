import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router-dom'
import { getOne, getAllCategories, updateQuestion } from '../../services/questionService'

const EditQuestion = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [options, setOptions] = useState([])
  const [formData, setFormData] = useState({
    // id: id,
    // question: '',
    // answer: '',
    // category: '',
    // difficulty: ''
  })

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [category, setCategory] = useState([])
  const [difficulty, setDifficulty] = useState('')

  useEffect(() => {
    formData.question = question
  },[formData.question])

  // useEffect(() => {
  //   formData.answer = answer
  // },[formData.answer])

  // useEffect(() => {
  //   formData.category = category
  // },[formData.category])

  // useEffect(() => {
  //   formData.difficulty = difficulty
  // },[formData.difficulty])

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
  },[id])

  const handleUpdateQuestion = async(e) => {
    e.preventDefault()
    try {
      formData.question = question
      formData.answer = answer
      formData.category = category
      formData.difficulty = difficulty
      await updateQuestion(formData)
      navigate('/index')
    } catch(err) {
      throw err
    }
  }

  console.log(formData)

  return (
    <div className='content-center'>
      <form onSubmit={handleUpdateQuestion}>

        <div className='bg-yellow-600 w-1/3 rounded m-5 p-5'>

          <div className='m-5'>
            <label>Enter Question</label>
            <input className='rounded w-full h-10'
              required
              name='question'
              autoComplete='off'
              placeholder='Question'
              value={formData.question}
              onChange={(e) => setQuestion(e.target.value)}
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
              onChange={(e) => setAnswer(e.target.value)}
              />
          </div>

          <div className=''>
            <div className='m-5'>
              <label>Use Existing Category</label>
              <select className='rounded w-full h-10'
                name="category" 
                value={formData.category}
                onChange={(e) => setCategory(e.target.value)} 
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
                onChange={(e) => setCategory(e.target.value)}
                />
            </div>
          </div>

          <div className='m-5'>
            <label>Pick Difficulty</label>
            <select className='rounded w-full h-10'
              name="difficulty" 
              value={formData.difficulty}
              onChange={(e) => setDifficulty(e.target.value)} 
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
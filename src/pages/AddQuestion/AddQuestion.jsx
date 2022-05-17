import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import QuestionForm from './QuestionForm'

// import { CategoryOptions } from './CategoryOptions'

import { createQuestion, getAllCategories } from '../../services/questionService'

const AddQuestion = (props) => {
  const navigate = useNavigate()

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [category, setCategory] = useState([])
  const [difficulty, setDifficulty] = useState('')
  const [url, setURL] = useState('')
  const [options, setOptions] = useState([])

  const formData = {
    question: question,
    answer: answer,
    category: category,
    difficulty: difficulty,
    url: url
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCategories()
      return data
    }
    fetchData()
      .then(data => {
        setOptions(data)
      })
      .catch(err => {
        throw err
      })
  }, [])
    
  const handleAddQuestion = async(e) => {
    e.preventDefault()
    try {
      await createQuestion(formData)
      navigate('/index')
    } catch(err) {
      throw err
    }
  }

  return(
    <div>
      <QuestionForm 
        question={question}
        setQuestion={setQuestion}

        answer={answer}
        setAnswer={setAnswer}

        category={category}
        setCategory={setCategory}

        difficulty={difficulty}
        setDifficulty={setDifficulty}

        url={url}
        setURL={setURL}

        handleAddQuestion={handleAddQuestion}
        options={options}
      />
    </div>
  )
}

export default AddQuestion
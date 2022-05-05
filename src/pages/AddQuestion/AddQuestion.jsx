import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import QuestionForm from './QuestionForm'

import { createQuestion } from '../../services/questionService'

const AddQuestion = (props) => {
  const navigate = useNavigate()

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [url, setURL] = useState('')

  const formData = {
    question: question,
    answer: answer,
    category: category,
    difficulty: difficulty,
    url: url
  }

  const handleAddQuestion = async(e) => {
    e.preventDefault()
    try {
      const newQuestion = await createQuestion(formData)
      console.log(newQuestion)
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
      />
    </div>
  )
}

export default AddQuestion
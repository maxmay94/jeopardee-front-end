import React, { useState, useEffect } from 'react'
import { getAllQuestions } from '../../services/questionService'
import QuestionList from '../../components/QuestionList/QuestionList'

const QuestionIndex = (props) => {
  const[questions, setQuestions] = useState([{}])

  useEffect(() => {
    const fetchAllQuestions = async() => {
      const questionData = await getAllQuestions()
      setQuestions(questionData)
    }
    fetchAllQuestions()
    return () => { setQuestions([{}]) }
  }, [])

  console.log('questions ------->> ', questions)

  return (
    <div className='h-screen w-screen bg-amber-500'>
      {
        questions.map((question) => {
          <QuestionList 
            key={question.id}
            question={question.question}
            answer={question.answer}
            category={question.category}
            difficulty={question.difficulty}
          />
        })
      }
    </div>
  )
}

export default QuestionIndex
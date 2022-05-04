import React, { useState, useEffect } from 'react'
import { getAllQuestions } from '../../services/questionService'
import IndexCard from '../../components/QuestionList/IndexCard'

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
    <div className='h-full w-full bg-blue-900'>
      {questions ?
          questions.map((question, i) => (
            question._id &&
              <div key={question._id} className='flex group relative'>
                <IndexCard 
                  question={question.question}
                  answer={question.answer}
                  category={question.category}
                  difficulty={question.difficulty}
                />
              </div>
          ))
        :
          <div className='bg-red-600'>No questions yet</div>
      }
    </div>
  )
}

export default QuestionIndex
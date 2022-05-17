import React, { useState, useEffect } from 'react'
import { getAllQuestions, deleteQuestion } from '../../services/questionService'
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

  const handleDeleteQuestion = async(questionId) => {
    console.log('QUESTION ID ------>> ',questionId)
    try{
      await deleteQuestion(questionId)
      const questionData = await getAllQuestions()
      setQuestions(questionData)
    } catch(err) {
      throw err
    }
  }

  return (
    <div className='flex flex-wrap'>
      {questions ?
          questions.map((question, i) => 
            question._id &&
              <div key={question._id} className='m-5 min-w-1/6'>
                <IndexCard
                  question={question}
                  handleDeleteQuestion={handleDeleteQuestion}
                />
              </div>
          )
        :
          <div className='bg-red-600'>No questions yet</div>
      }
    </div>
  )
}

export default QuestionIndex
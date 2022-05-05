import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/questions/`

export const getAllQuestions = async() => {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export const getAllCategories = async() => {
  try{
    const res = await fetch(`${BASE_URL}/show`)
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export const createQuestion = async(question) => {
  console.log('question service ----> ',question)
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(question)
    })
    const data = await res.json()
    console.log('CREATE QUESTION : data ------->>',data)
    return data
  } catch(err) {
    throw err
  }
}
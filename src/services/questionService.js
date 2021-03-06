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

export const getOne = async(id) => {
  try{
      const res = await fetch(`${BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${tokenService.getToken()}` },
        method: "GET",
      })
      const data = await res.json();
      return data
  } catch(err) {
    throw err
  }
}

export const getAllCategories = async() => {
  try{
    const res = await fetch(`${BASE_URL}show`)
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export const deleteQuestion = async(qestionId) => {
  try{
    await fetch(`${BASE_URL}${qestionId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
  } catch(err) {
    throw err
  }
}

export const createQuestion = async(question) => {
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
    return data
  } catch(err) {
    throw err
  }
}

export const updateQuestion = async (questionId) => {
  try {
    const res = await fetch(`${BASE_URL}${questionId}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
    })
    const data = await res.json()
    return data
  } catch (err) {
    throw err
  }
}

export const startGame = async() => {
  console.log('startGame')
  try{
    const res = await fetch(`${BASE_URL}play`, {
      merhod: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `omit`
      },
    })
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}
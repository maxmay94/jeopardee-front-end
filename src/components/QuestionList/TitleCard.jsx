import React from 'react'

const TitleCard = (props) => {
  return(
    <div className='text-center text-white font-extrabold border-black'>
      <h1 className='text-3xl rounded'>{props.title[0]?.category}</h1>
      <br />
    </div>
  )
}

export default TitleCard
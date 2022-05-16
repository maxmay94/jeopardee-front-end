import React from 'react'

const TitleCard = (props) => {
  return(
    <div className='text-center text-white font-extrabold h-1/8'>
      <h1 className='text-3xl rounded align-middle'>{props.title[0]?.category.toUpperCase()}</h1>
      <br />
    </div>
  )
}

export default TitleCard
import React from 'react'

const TitleCard = (props) => {
  return(
    <div className='text-center text-white font-extrabold h-1/6'>
      <h1 className='text-3xl rounded align-middle'>{props.title[0]?.category}</h1>
      <br />
    </div>
  )
}

export default TitleCard
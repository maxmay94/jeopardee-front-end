import React from 'react'

const TitleCard = (props) => {
  return(
    <div className='text-center text-white font-extrabold h-1/6 grid place-content-center border-y-2 border-black p-3'>
      <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl rounded align-middle drop-shadow-lg'>{props.title[0]?.category.toUpperCase()}</h1>
    </div>
  )
}

export default TitleCard
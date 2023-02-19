import React from 'react'

const Card = ({imgURL, text}) => {
  return (
    <div className='flex flex-col bg-white w-60 h-60 p-4 border-2 rounded-xl '>
        <img src={imgURL} alt={text}/>
    </div>
  )
}
export default Card
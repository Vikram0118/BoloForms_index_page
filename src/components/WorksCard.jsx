import React from 'react'

const WorksCard = ({imgURL, number, text}) => {
  return (
    <div className='flex flex-col bg-white w-96 h-96'>
        <img src={imgURL} alt={text} className="transform transition-transform hover:-translate-y-2 transition-duration-300"/>
        <p className='font-bold text-center text-xl'>Step {number}:</p>
        <p className='text-center'>{text}</p>
    </div>
  )
}

export default WorksCard
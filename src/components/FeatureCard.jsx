import React from 'react'

const FeatureCard = ({imgURL, title, content}) => {
  return (
    <div className='flex flex-col h-72 w-72 p-4 '>
        <img src={imgURL} alt="Picture" className='w-14 h-14' />
        <p className='text-2xl font-bold'>{title}</p>
        <p>{content}</p>
    </div>
  )
}

export default FeatureCard
import React from 'react'

const SupportCard = ({imgURL, head, text, button}) => {
  return (
    <div className='flex flex-col bg-white w-72 h-96 p-7  border-2 rounded-lg gap-5'>
        <div>
            <img src={imgURL}/>
            <p className='text-2xl font-bold'>{head}</p>
            <p>{text}</p>
        </div>
        <button className='rounded-lg border-2 border-purple-700 text-purple-00 hover:bg-purple-600 hover:text-white'>{button}</button>

    </div>
  )
}

export default SupportCard
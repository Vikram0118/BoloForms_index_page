import React from 'react'
import {useState} from 'react'
import {Msg, Cross} from './import'

const Message = () => {

  const [img, setImg] = useState(Msg)

  return (
      <div className='fixed z-90 bottom-10 right-8 z-90 w-14 h-14 rounded-full' onClick={ () =>{(img == Msg) ? setImg(Cross) : setImg(Msg)}}>
          <img src={img} className="w-10 h-10" />
      </div>
  )
}

export default Message
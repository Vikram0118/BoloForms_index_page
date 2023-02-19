import React from 'react'
import {Star} from './index'

const PersonCard = ({ imgURL, text, author}) => {
  return (
    <div class="flex items-center bg-white rounded-3xl shadow-xl md:flex-row md:max-w-7xl max-h-56 m-auto gap-7 p-6">
        <img class=" w-32 rounded-full h-32 " src={imgURL} alt="Picture" />
        <div class="flex flex-col gap-3">
            <Star />
            <p class=" text-lg "> "{text}"</p>
            <p class="text-lg font-bold ">{author}</p>
        </div>
    </div>
  )
}

export default PersonCard
import React from 'react'
import { FootOne } from '../../components'
import {tw, fb, yt} from './import'

const Footer = () => {
  return (
    <div className='flex flex-col bg-slate-100 p-10 items-center gap-5'>
      <FootOne />
      <p className='text-base font-thin'>Made with 🔥 + ❤️ in India</p>
      <div className='flex '>
        <a href="https://twitter.com/BoloForms"><img src={tw} className="w-16 h-10" /></a>
        <a href="https://www.facebook.com/boloforms/"><img src={fb} className="w-16 h-8" /></a>
        <a href="https://www.youtube.com/channel/UCjbA2sUd7jxdtiuwadt7VKg"><img src={yt} className="w-16 h-10" /></a>
      </div>
    </div>
  )
}

export default Footer
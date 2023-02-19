import React from 'react'
import {PersonCard} from './index'

const AboveFeature = ({imgURL, text, author}) => {
  return (
    <div className='flex flex-col gap-4 my-10'>
        <PersonCard imgURL={imgURL} text= {text} author={author} />
        <br />
        <div className='flex items-center gap-5 mx-auto'>
          <a href="https://workspace.google.com/marketplace/app/boloforms_approvals_for_google_forms_and/674195424545?ref=website" target='_blank'>
            <button className='text-2xl rounded border-2 border-purple-700 text-purple-00 hover:bg-purple-600 hover:text-white px-4 py-2'>🢃 Install Now</button>
          </a>
          <a href="https://www.boloforms.com/form-approval/pricing/" target='_blank'>
            <button className='text-2xl rounded text-white bg-purple-700 hover:bg-purple-600 px-6 py-2'>🚀 BoloForm Premium</button>
          </a>
        </div>
        <br />
        <div className='flex items-center mx-auto gap-5 text-lg'>
            <p>✓ Trusted by 50000+ Businesses</p>
            <p>✓ 30 Days Money Back Guarantee</p>
            <p>✓ 1-1 Zoom & WhatsApp Onboarding</p>
        </div>
    </div>
  )
}

export default AboveFeature
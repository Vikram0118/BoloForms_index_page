import React from 'react'
import {batch, sign} from './import'

const Certificate = () => {
  return (
    <div className='flex max-w-7xl shadow-2xl mx-auto my-6 gap-2 p-11 rounded-2xl'>
        <div className='px-9 py-3'>
            <img src={batch} alt="Pic" className='w-32 h-32'/>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='font-bold text-slate-500 text-xl'>MY 100% NO-RISK DOUBLE-GUARANTEE</p>
            <p className='text-xl font-bold'>If you don’t like BoloForms over the next 30 days, I will happily refund 100% of your purchase. No questions asked.</p>
            <p className='text-lg'>Here's why I'm offering this -</p>
            <p className='text-lg'>I have seen the power of automating your business workflows. Take some time out of your busy schedule today and see what all things can be automated in your workflows.</p>
            <p className='text-lg'>You will find that most of your time is going in doing things that could be done better by automating. You just have to give it a shot!</p>
            <p className='text-lg'>Start with automating small workflow and then gradually you will love it!!</p>
            <p className='text-lg'>Thank you, and I hope we'll get the opportunity to be a part of your growth journey soon!</p>
            <div className='flex flex-col'>
                <img src={sign} alt="Sign" className='w-36 h-20'/>
                <p className='font-bold text-xl'>Paresh Deshmukh</p>
                <p>Co-Founder BoloForms</p>
            </div>
        </div>
    </div>
  )
}

export default Certificate
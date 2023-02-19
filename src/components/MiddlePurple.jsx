import React from 'react'
import {Star} from '../components'
import {personfour} from './import'

const MiddlePurple = () => {
  return (
    <div className='max-h-full text-white bg-purple-600'>
        <div className='flex flex-col max-w-6xl mx-auto py-24 items-center gap-4'>
            <p className='font-bold'>“ Boloforms has completely revolutionized our form approval process. It is incredibly easy to use and simple to set up, saving us countless hours of work. We can now easily manage all of our form approvals, assign tasks to different team members and track progress all in one place. Boloforms is a must-have for any business looking for an efficient Form Approval Workflow Software! "</p>
            <Star />
            <div className='flex gap-3'>
                <img src={personfour} alt="picture" className='w-40 h-40 rounded-full' />
                <div className='flex flex-col my-auto'>
                    <p className='text-2xl font-bold'>Patrick Nyama,</p>
                    <p>Edmonton CA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiddlePurple
import React from 'react'
import {ug} from './import'


const NewStuff = () => {
  return (
    <div className='flex justify-between max-w-7xl mx-auto my-32'>
        <div>
            <img src={ug} alt="Picture" className='w-96 h-96' />
        </div>
        <div>
            <div className='flex flex-col my-auto gap-5 justify-end items-centre max-w-2xl p-3 mx-auto'>
                <p className='text-4xl font-bold'>An End-To-End Workflow Platform For All Your Business Needs</p>
                <p className='text-xl'>1000+ companies-from Startups to Fortune 500s use BoloForms Approvals to build and manage business processes across departments.</p>
                <button className='rounded-xl w-56 text-white bg-purple-700 hover:bg-purple-600 px-6 py-2'>🚀 BoloForm Premium</button>
            </div>
        </div>

    </div>
  )
}

export default NewStuff
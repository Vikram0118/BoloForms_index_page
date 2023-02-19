import React from 'react'
import {logo, form} from './import';

const FullyAutomated = () => {
  return (
    <div className='flex flex-col gap-4 my-8 justify-evenly max-w-5xl mx-auto'>
        <p className='text-4xl font-bold mx-auto'>Fully Automated Workflows</p>
        <p className='text-lg mx-auto'>No more painful manual approval management and wasting countless hours.</p>
        <br />
            <div className='flex items-center my-auto justify-evenly text-xl'>
                <div className='flex flex-col gap-5 border-r-4 p-5 border-purple-600 '>
                    <div className='flex gap-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 h-14 items-center px-4 rounded-xl'>
                        <img src={form} />
                        <p>Leave Application</p>
                    </div>
                    <div className='flex gap-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 h-14 items-center px-4 rounded-xl'>
                        <img src={form} />
                        <p>Purchase Order</p>
                    </div>
                    <div className='flex gap-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 h-14 items-center px-4 rounded-xl'>
                        <img src={form} />
                        <p>Fulfilment</p>
                    </div>
                </div>
                <img src={logo} alt="Logo" width="128" height="128"/>
                <div className='flex flex-col gap-5 border-l-4 p-5 border-purple-600'>
                    <div className='flex gap-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 h-14 items-center px-4 rounded-xl'>
                        <img src={form} />
                        <p>Approvel</p>
                    </div>
                    <div className='flex gap-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 h-14 items-center px-4 rounded-xl'>
                        <img src={form} />
                        <p>Reject</p>
                    </div>
                    <div className='flex gap-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 h-14 items-center px-4 rounded-xl'>
                        <img src={form} />
                        <p>Send Pdf</p>
                    </div>
                </div>            
        </div>
        <p className='text-2xl mx-auto my-3'>BoloForms workflows acts as a glue holding together all your approval processes.</p>
    </div>
  )
}

export default FullyAutomated
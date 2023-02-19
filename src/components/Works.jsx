import React from 'react'
import {WorksCard} from './index'
import {work1, work2, work3} from "./import"

const Works = () => {
  return (
        <div id='howtouse' className='flex flex-col h-screen w-screen justify-center items-center max-w-6xl mx-auto gap-4 mt-12'>
            <p className='text-3xl font-bold'>How does BoloForm works ?</p>
            <p className='text-xs '>Set up your first workflow in just 3 easy steps.</p>
            <div className='flex justify-center items-center gap-5'>
                <WorksCard imgURL={work1} number='1' text='Choose a template or add questions to create your Google Form.'/>
                <WorksCard imgURL={work2} number='2' text='Enable Single/Multi Step approval and add necessary approvers!'/>
                <WorksCard imgURL={work3} number='3' text='Now you can enable the workflow and share the Google Form'/>
            </div>
        </div>
  )
}

export default Works
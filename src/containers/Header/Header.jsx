import React from 'react'
import '../../index.css'

const Header = () => {
  return (
    <>
      <div className='header flex h-screen w-screen max-w-6xl mx-auto items-center gap-7'>
        <div className='flex flex-col gap-6'>
          <p className='max-w-lg font-bold text-4xl text-left text-black '>Transform Google Forms Into Interactive Workflows</p>
          <p className='max-w-lg text-lg'>BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes.</p>
          <a href="https://workspace.google.com/marketplace/app/boloforms_approvals_for_google_forms_and/674195424545?ref=website" target='_blank'>
            <button className='rounded-lg text-white bg-purple-700 hover:bg-purple-600 w-40 px-2 py-2'>🚀 Install For Free</button>
          </a>
        </div>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/riiUkCRpIio" title="YouTube video player" frameborder="0" className='border-4 rounded-xl border-purple-700' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default Header
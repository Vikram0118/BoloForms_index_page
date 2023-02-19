import React from 'react'
import {Star, SupportCard} from './index'
import {supportone, supporttwo, supportthree, supportfour} from './import'

const Support = () => {
  return (
    <div id="support" className='flex flex-col max-w-7xl mx-auto my-20 items-center gap-3 scroll-mt-40'>
        <Star />
        <p className='text-3xl font-bold'>Award-winning support <span className='text-purple-600'>.</span></p>
        <p>Best-in-class support. We're always here to help - here's how to connect.</p>
        <div className='flex items-center gap-3'>
        <SupportCard imgURL={supportone} head="? Whatsapp chat" text="Ask a question right now." button="Start a chat"/>
        <SupportCard imgURL={supporttwo} head="? Email" text="Get in touch by email." button="Send an Email"/>
        <SupportCard imgURL={supportthree} head="? Help center" text="In Depth Guides." button="Read article"/>
        <SupportCard imgURL={supportfour} head="? Google Meet" text="Guided support and Q&A." button="Book a time"/>
        </div>
    </div>
  )
}

export default Support
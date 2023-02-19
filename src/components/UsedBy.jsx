import React from 'react'
import {UsedByCard} from './index'
import {card1, card2, card3, card4, card5} from './import'

const UsedBy = () => {
  return (
        <div id='usedby' className='flex flex-col justify-center items-center max-w-6xl mx-auto gap-20 scroll-mt-56'>
            <p className='text-3xl font-bold'>BoloForms Is Used By</p>
            <div className='flex justify-center items-center gap-3'>
                <UsedByCard imgURL={card1} text="crumbl"/>
                <UsedByCard imgURL={card2} text="raya"/>
                <UsedByCard imgURL={card3} text="uber"/>
                <UsedByCard imgURL={card4} text="hubspot"/>
                <UsedByCard imgURL={card5} text="gov of malaysia"/>
            </div>
        </div>
  )
}

export default UsedBy
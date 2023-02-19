import React from 'react'
import {UsedBy, Works, AboveFeature, Feature, PersonCard, NewStuff, MiddlePurple, FullyAutomated, Certificate, Support, FreqQuestion, Customer} from '../../components'
import {personone, persontwo, personthree, personfive, personsix} from './import'


const Body = () => {
  return (
    <div>
      <UsedBy />
      <Works />
      <AboveFeature imgURL={personone} text ="Boloforms has been an absolute lifesaver for me. It makes workflow tasks much easier and helps to ensure that everything runs smoothly. I love how it automates tasks and eliminates manual processes, saving me time and effort. It's a great Google Workflow software and is well worth the money! " author="Repa Mandala"/>
      <Feature />
      <AboveFeature imgURL={persontwo} text="Boloforms has changed the way my team and I work. We used to have a very inefficient workflow, but Boloforms has streamlined it and allowed us to get our daily tasks done in a fraction of the time. Plus, it's incredibly user friendly and easy to understand. I highly recommend Boloforms for anyone who needs an efficient Google workflow software!" author="Alaa Khaled"/>
      <PersonCard imgURL={personthree} text="Easy to use interface and timely support...looking for more features" author="Deepak S (Solero Corporation)" />
      <NewStuff />
      <MiddlePurple/>
      <FullyAutomated />
      <AboveFeature imgURL={personfive} text="I recently started using Boloforms for my Google Forms and it has been an absolute game-changer. The software is intuitive and user friendly, so I was able to set up my forms quickly & easily. It also provides powerful analytics to understand and act on the data collected from my forms in real-time. Overall, it's been a great experience using Boloforms and I highly recommend it!" author="Raman R"/>
      <PersonCard imgURL={personsix} text="Customer support is super awesome, Great add on for our team! This helps our task management must easier. I can easily keep track of my member's request and work progress. The approval process is smooth and extremely quick. I highly recommend this addon especially for small business like mine." author="John M."/>
      <Certificate />
      <Support />
    </div>
  )
}

export default Body
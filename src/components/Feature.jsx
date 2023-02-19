import React from 'react'
import {FeatureCard} from './index'
import { featureone, featuretwo, featurethree, featurefour, featurefive, featuresix, featureseven, featureeight, featurenine } from './import'

const Feature = () => {
  return (
    <div id="features" className='flex flex-col items-center mx-auto max-w-7xl mt-16 gap-3 scroll-mt-40'>
        <div className='text-4xl font-bold'>Features</div>
        <div>Everything that your organisation will love, & more.</div>
        <br />
        <div className='flex flex-col gap-1'>
            <div className='flex gap-4' >
                <FeatureCard imgURL={featureone} title="Get started in less than 5 minutes." content="Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made."/>
                <FeatureCard imgURL={featuretwo} title="Multi-level workflows" content="To ensure that your executives do not approve a document until it has been reviewed and accepted by other employees, you can set up multi-level approval processes."/>
                <FeatureCard imgURL={featurethree} title="Dynamic Reciepients" content="Approvers can be selected based on the answers to a form response or entered manually by the requestor."/>
            </div>
            <div className='flex gap-4' >
                <FeatureCard imgURL={featurefour} title="Role Based Workflows" content="Assign the following roles to your recipients: Approver, Receive a Copy, and Send Final Email Only."/>
                <FeatureCard imgURL={featurefive} title="Conditional Logic" content="To prevent unnecessary work for approvers, set logic with your approvals to ensure approvers only receive the requests that are relevant to them."/>
                <FeatureCard imgURL={featuresix} title="One-click Approvals" content="Notification emails are sent to users and can be approved with a single click."/>
            </div>
            <div className='flex gap-4' >
                <FeatureCard imgURL={featureseven} title="Responsive design" content="It is designed to be mobile-first, and seamlessly works on desktop and tablet as well."/>
                <FeatureCard imgURL={featureeight} title="Enterprise grade security" content="Majority of data stored in your spreadsheet. This ensures you have the complete control of your data with end to end encryption."/>
                <FeatureCard imgURL={featurenine} title="Custom Dashboard" content="Track approvals of various forms from a single place! See the approval process for each request in real-time"/>
            </div>
        </div>
    </div>
  )
}

export default Feature
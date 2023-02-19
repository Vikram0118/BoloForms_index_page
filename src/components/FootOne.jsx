import React from 'react'
import  {one, two, three, four} from './import'

const FootOne = () => {
  return (
    <div className='flex w-11/12 items-start justify-between mx-auto'>
        <div className='flex flex-col gap-4'>
                <a href="https://api.whatsapp.com/send/?phone=918830631677&text=Need%20Help%20with%20BoloForms%20Approvals" target="_blank" className='flex gap-3'>
                    <img src={one} alt="" className='w-11 h-11' />
                    <p className='font-bold text-2xl'>Live Chat</p>
                </a>
                <a href='mailto:support@boloforms.com' target="_blank" className='flex gap-3'>
                    <img src={two} alt="" className='w-11 h-11' />
                    <p className='font-bold text-2xl'>Support Email</p>
                </a>
                <a href="https://approval-docs.boloforms.com/" target="_blank" className='flex gap-3'>
                    <img src={three} alt="" className='w-11 h-11' />
                    <p className='font-bold text-2xl'>Help Center</p>
                </a>
                <a href="https://calendly.com/boloforms/15min?month=2023-02" target="_blank" className='flex gap-3'>
                    <img src={four} alt="" className='w-11 h-11'/>
                    <p className='font-bold text-2xl'>Video Call</p>
                </a>
        </div>
        <div className='gap-3'>
            <p className='font-semibold'>Pages</p>
            <div>
                <a href="#"><p className='font-thin'>Home</p></a>
                <a href="https://www.boloforms.com/form-approval/pricing/" target="_blank"><p className='font-thin'>Pricing</p></a>
                <a href="https://www.boloforms.com/blog/" target="_blank"><p className='font-thin'>Blogs</p></a>
                <a href="https://www.boloforms.com/about/" target="_blank"><p className='font-thin'>About us</p></a>
            </div>
        </div>
        <div className='gap-3'>
            <p className='font-semibold'>Products</p>
            <div>
                <a href="#"><p className='font-thin'>Forms Approval</p></a>
                <a href="#"><p className='font-thin'>Signature</p></a>
                <a href="https://sheetgod.boloforms.com/login" target="_blank"><p className='font-thin'>Sheetgod</p></a>
                <a href="https://workspace.google.com/u/5/marketplace/app/boloforms_formfacade_customize_google_fo/959255309914" target="_blank"><p className='font-thin'>Google from UI Enhancer</p></a>
                <a href="https://workspace.google.com/marketplace/app/bolo_mail_merge_for_google_docs_document/204560571245" target="_blank"><p className='font-thin'>BoloForm Documnet Generator</p></a>
                <a href="https://www.boloforms.com/timer-classroom/" target="_blank"><p className='font-thin'>Timer + Proctor</p></a>
                <a href="https://chrome.google.com/webstore/detail/free-google-meet-attendan/bnpnjagfokmjkojcdafeodgfkimecajh?utm_source=website_landing" target="_blank"><p className='font-thin'>Google Meet Attendence Tracker</p></a>
            </div>
        </div>
        <div className='gap-3'>
            <p className='font-semibold'>Legal</p>
            <div>
                <a href="https://www.boloforms.com/terms-of-service/" target="_blank"><p className='font-thin'>Terms of Service</p></a>
                <a href="https://www.boloforms.com/privacy-policy/" target="_blank"><p className='font-thin'>Privacy Policy</p></a>
                <a href="https://www.boloforms.com/refund-policy/" target="_blank"><p className='font-thin'>Refund Policy</p></a>
                <a href="https://data-policy.boloforms.com/" target="_blank"><p className='font-thin'>Data Security & Policy</p></a>
            </div>
        </div>
    </div>
  )
}

export default FootOne

import React from 'react'
import {logo, down} from './import.js'
import '../../index.css'
import {SideNavBar} from '../../components'

const NavBar = () => {
  return (
    <div className='flex flex-col sticky top-0 z-10 bg-slate-200 backdrop-filter backdrop-blur-lg bg-opacity-40 '>
      <div className='flex justify-between items-center mx-auto '>
        <div className='flex justify-between items-center h-20 mx-auto gap-5'>
            <a href="#">
              <img src={logo} alt="Logo" width="128" height="128"/>
            </a>
            <a href="https://www.boloforms.com/form-approval/pricing/" target='_blank'>
                <p className="relative group">
                  <span className='hover:text-purple-700 flex items-center gap-3'>Products <img src={down} className="w-3 h-3 bottom-0"/></span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-purple-700 group-hover:w-1/2 group-hover:transition-all"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-purple-700 group-hover:w-1/2 group-hover:transition-all"></span>
                </p>
              </a>


              <a href="https://www.boloforms.com/form-approval/pricing/" target='_blank'>
                <p className="relative group">
                  <span className='hover:text-purple-700'>Pricing</span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-purple-700 group-hover:w-1/2 group-hover:transition-all"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-purple-700 group-hover:w-1/2 group-hover:transition-all"></span>
                </p>
              </a>
              <a href="https://approval-docs.boloforms.com/" target='_blank'>
                <p className="relative group">
                  <span className='hover:text-purple-700'>Guide</span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-purple-700 group-hover:w-1/2 group-hover:transition-all"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-purple-700 group-hover:w-1/2 group-hover:transition-all"></span>
                </p>
              </a>
              <a href="https://www.boloforms.com/workflow-templates/" target='_blank'>
                <p className="relative group">
                  <span className='hover:text-purple-700'>Template</span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-purple-700 group-hover:w-1/2 group-hover:transition-all"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-purple-700 group-hover:w-1/2 group-hover:transition-all"></span>
                </p>
              </a>
       </div>
       <div className='flex justify-end items-center mx-40 '>
          <div className='flex gap-4'>
            <a href="https://workspace.google.com/marketplace/app/boloforms_approvals_for_google_forms_and/674195424545?ref=website" target='_blank'>
              <button  className='rounded-xl border-2 border-purple-700 text-purple-00 hover:bg-purple-600 hover:text-white px-4 py-1'>Install Now</button>
            </a>
            <a href="https://www.boloforms.com/form-approval/pricing/" target='_blank'>
              <button className='rounded-xl text-white bg-purple-700 hover:bg-purple-600 px-6 py-1'>BoloForm Premium</button>
            </a>
          </div> 
        </div>
      </div>
      <SideNavBar />
    </div>
  )
}

export default NavBar
import React from 'react'
import './SideBar.css'

const SideNavBar = () => {
  return (
    // <div className =" z-10 bg-slate-200 backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-slate-400">
    <div>
      <div className='flex justify-evenly items-center max-w-6xl mx-auto pt-1 pb-3'>
        <a href="#usedby">
          <button class="cssbuttons-io h-11 flex items-center ">
            <span>Our Customers</span>
          </button>
        </a>
        <a href="#howtouse">
          <button class="cssbuttons-io h-11 flex items-center ">
            <span>How to use ?</span>
          </button>
        </a>

        <a href="#features">
          <button class="cssbuttons-io h-11 flex items-center ">
            <span>Features</span>
          </button>
        </a>

        <a href="#support">
          <button class="cssbuttons-io h-11 flex items-center ">
            <span>Support</span>
          </button>
        </a>
      </div>
    </div>
  )
}

export default SideNavBar
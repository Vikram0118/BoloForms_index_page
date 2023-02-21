import React from 'react'
import {Header, Body, Footer, NavBar} from './containers'
import {Message, SideNavBar} from './components'

const App = () => {

  let docTitle = document.title;

  window.addEventListener("blur" ,() => {
    document.title ="Hire Me : ) 😄";
  })
  window.addEventListener("focus", () => {
    document.title = docTitle;
  })

  return (
    <div className='App'>
      <Message />
      <NavBar/>
      {/* <SideNavBar /> */}
      <Header />
      <Body/>
      <Footer/>
      
    </div>
  )
}

export default App
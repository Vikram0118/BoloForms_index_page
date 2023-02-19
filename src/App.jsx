import React from 'react'
import {Header, Body, Footer, NavBar} from './containers'
import {Message, SideNavBar} from './components'

const App = () => {
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
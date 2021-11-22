import React from 'react'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import NavLow from './Component/NavLow'
import Jumbo from './Component/Jumbotron'
import JumboLow from './Component/JumboLow.jsx'

const App = () => {
  return (
    <div className='Container'>
      <Navbar />
      {/* <NavLow /> */}
      <Jumbo />
      <JumboLow />
      <Home />
      <Footer />
     
    </div>
  )
}

export default App

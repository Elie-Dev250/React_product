import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'

import ContactLayout from './layout/ContactLayout'
import Contactinfo from './components/Contactinfo'
import Contactform from './components/Contactform'

function App() {
  return (
    <div>
      <Navbar/>

      <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactLayout/>}>

        <Route path='info' element={<Contactinfo/>}/>
        <Route path='form' element={<Contactform/>}/>
        </Route>
      </Routes>
      </div>

    </div>
  )
}

export default App

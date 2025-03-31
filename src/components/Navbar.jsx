import React from 'react'
import favicon from '../assets/favicon.ico'

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Navbar() {

    const navigate=useNavigate()
  return (
    <div className='navbar'>
      <img src={favicon} alt=""  width="66px"/>
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/products"><li>Product</li></NavLink> 
        <NavLink to="/about"><li>About</li></NavLink> 
        <NavLink to="/contact"><li>Contact</li></NavLink>  
       
      </ul>

      <button onClick={()=>navigate('/',{replace:true})}>Back to home</button>
    </div>
  )
}

export default Navbar

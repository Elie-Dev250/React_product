import React, { useState,createContext } from 'react'
import ComponentB from './ComponentB'
import { useContext } from 'react'

export const usercontext=createContext()
function ComponentA() {

    const [user,setUser]=useState("samuel")
  return (
    <div className='box'>
      <h1>ComponentA</h1>
      <p>Hello {user}</p>
      <usercontext.Provider value={user}>
      <ComponentB/>
      </usercontext.Provider>
    </div>
  )
}

export default ComponentA

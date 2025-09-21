import { useState } from 'react'
import { Hero } from './components/Hero'
import {Cards} from './components/Cards'
function App() {

  return (
    <>
    <div className='bg-gradient-to-br from-black to-red-950 min-h-screen'>
    <Hero/>
    <Cards/>
    </div>
    </>
  )
}

export default App

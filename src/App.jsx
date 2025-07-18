import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'

function App() {

  return (
    <>    
      
     <div className=' d-flex row align-items-center justify-content-center w-100'>
      <h2 className='text-center mt-5'>Counter</h2>
      <Counter/>
     </div>
    </>
  )
}

export default App

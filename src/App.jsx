import React from 'react'
import Homepage from './components/Homepage'
import Header from './components/Header'

const App = () => {
  return (
    <div className='mb-10'>
       <Header/>
       <div >
       <h1 className='text-center font-bold text-6xl tracking-widest first-letter:text-red-600 first-letter:text-8xl mb-10'>SNEAKERS</h1>
       <Homepage/>
       </div>
      
    </div>
  )
}

export default App
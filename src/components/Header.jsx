import React, { useState } from 'react'
import Hamburger from "../assets/hammenu.jpg"

const Header = () => {

  const [open,setOpen]=useState(false)

  return (
    <div className='relative h-20'>
        <div className='flex justify-end md:justify-between w-full fixed z-10 bg-white h-20 shadow-lg'>
            <h1 className='text-2xl sm:text-3xl drop-shadow-lg cursor-pointer mt-5 mb-5'>FASHION STORE</h1>
            
            <div className='md:hidden'>
            <img src={Hamburger} alt="" className=' ml-28' width={80} height={80} onClick={()=>setOpen(!open)}/>
                <ul className='flex flex-col bg-white justify-between gap-20 text-2xl text-center lg:mt-5'>
                    
                    {open?
                             <div>
                             <li className='hover:text-gray-600 hover:underline cursor-pointer text-3xl mx-20 my-5'>HOME</li>
                             <li className='hover:text-gray-600 hover:underline cursor-pointer text-3xl mx-20 my-5'>SHOP</li>
                             <li className='hover:text-gray-600 hover:underline cursor-pointer text-3xl mx-20 my-5'>SIGN IN</li>
                             <li className='cursor-pointer mx-20 mb-5'>🛒</li>
         
                             </div>
                             :
                             null
                            
                    }
                    
                </ul>
            </div>
            <div>
            <ul className='hidden md:flex bg-white justify-between gap-20 text-2xl text-center mt-5'>
                <li className='hover:text-gray-600 hover:underline cursor-pointer text-3xl '>HOME</li>
                 <li className='hover:text-gray-600 hover:underline cursor-pointer text-3xl '>SHOP</li>
                <li className='hover:text-gray-600 hover:underline cursor-pointer text-3xl'>SIGN IN</li>
                <li className='cursor-pointer '>🛒</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
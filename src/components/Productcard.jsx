import React, { useState } from 'react'

const Productcard = ({name,price,url,description}) => {

  const [desc,setDes]=useState(false);

  const ShowDesc=()=>{
        setDes(!desc)
  }

  return (
    <div>
        <div className=' relative w-[19rem]'>
          <img src={url} alt="" className='w-[19rem] h-96'/>
            <div className='flex justify-between p-2'>
            <h1>{name}</h1>
            <h2 >Rs.{price}</h2>
            </div>
            <div className='absolute bottom-48'>
              
              {
                desc?<div className='w-[19rem] bg-white p-2'><h1 className='uppercase text-xl text-bold first-letter:text-green-800 first-letter:text-3xl text-center underline'>Description</h1><p >{description}</p></div>:null
              }
            </div>
            
            <div className='w-28 m-auto mt-2'>
            <button className=' bg-black text-white rounded-lg text-center p-2' onClick={ShowDesc}>{desc?"Close Details":"View Details"}</button>
            </div>
            
            
        </div>
    </div>
  )
}

export default Productcard
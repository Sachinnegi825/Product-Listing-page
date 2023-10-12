import React from 'react'
import {Items} from "../constants"
import Productcard from './Productcard'

const Homepage = () => {
  return (
    <div>
            <div className='flex flex-wrap justify-center gap-10'>
                {
                    Items.map((product)=>{
                        return <Productcard {...product} key={product.id}/>
                    })
                }
            </div>
    </div>
  )
}

export default Homepage
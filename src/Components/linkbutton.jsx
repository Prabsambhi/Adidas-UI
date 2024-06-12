import React from 'react'
import Arrow from '../assets/arrow.png';

const linkbutton = (props) => {
  return (
   
    <div className='absolute flex bg-white py-2 px-4 w-fit space-x-2 mt-7'>
        <div className="text-black font-bold opacity-70">{props.heading}</div> 
        <img src={Arrow} alt="logo" className='h-7'/>
    </div>
  
  )
}

export default linkbutton;
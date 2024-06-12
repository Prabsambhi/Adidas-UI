import React from 'react'
import Arrow from '../assets/arrowwhite.png';

const linkbutton2 = (props) => {
  return (
   
    <button className=' flex items-center bg-black py-2 px-5 w-fit space-x-2'>
        <div className="text-white font-bold hover:text-zinc-400">{props.heading}</div> 
        <img src={Arrow} alt="logo" className='h-7'/>
    </button>
  
  )
}

export default linkbutton2;
import React from 'react'
import Linkbutton2 from '../Components/linkbutton2';

const topfooter = () => {
  return (
    <div className='bg-custom2 flex justify-center items-center py-11 space-x-7'>
    <div className='text-3xl font-bold'>JOIN ADIDAS AND GET 15% OFF</div>
    <div><Linkbutton2 heading="SIGN UP FOR FREE"/></div>
    </div>
  )
}

export default topfooter
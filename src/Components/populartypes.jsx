import React from 'react'

const populartypes = (props) => {
  return (
    <div className='relative mx-16 py-4 w-screen border-b border-black my-8'>
      <div className='absolute text-4xl font-bold bottom-2'>{props.content}</div>
      <div className='absolute inset-0 border-b-4 border-transparent hover:border-black'></div>
    </div>
  )
}

export default populartypes;

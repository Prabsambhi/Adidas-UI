import React from 'react'
import Populartypes from '../Components/populartypes';

const popular = () => {
  return (
    <>
    <h1 className='text-3xl font-bold px-16 py-20'>Popular right now</h1>
    <div className='flex '>
    <Populartypes content="samba"/>
    <Populartypes content="running shoes men"/>
    <Populartypes content="nmd"/>
    </div>
    <div className='flex '>
    <Populartypes content="backpack"/>
    <Populartypes content="man sandals"/>
    <Populartypes content="bag"/>
    </div>
    </>
  )
}

export default popular
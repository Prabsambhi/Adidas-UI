import React from 'react'
import Adiclub from '../assets/lifestyle/adiclub.png';
import Collaboration from '../assets/lifestyle/collaboration.jpg';
import Originals from '../assets/lifestyle/originals.jpg';
import Sports from '../assets/lifestyle/sports.jpg';

const CategoriesLifestyle = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
            className=" bg-white pt-10 pb-20"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex justify-evenly ">
                <div>
                    <h3 className="text-lg font-bold mb-4">WHAT'S NEW</h3>
                    <img src={Adiclub} alt="logo" className='h-28 mb-10' />
                    <ul className='text-base'>
                        <li className='mb-1'>You Got This!</li>
                        <li className='mb-1'>New Arrivals</li>
                        <li className='mb-1'>Stories</li>
                        <li className='mb-1'>adiclub</li>
                    </ul>

                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">COLLABORATION</h3>
                    <img src={Collaboration} alt="logo" className='h-28 mb-10' />
                    <ul className='text-base'>
                        <li className='mb-1'>Shoes</li>
                        <li className='mb-1'>Clothing</li>
                        <li className='mb-1'>Accessories</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">SPORTS</h3>
                    <img src={Sports} alt="logo" className='h-28 mb-10' />
                    <ul className='text-base'>
                        <li className='mb-1'>Shoes</li>
                        <li className='mb-1'>Clothing</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">ORIGINALS</h3>
                    <img src={Originals} alt="logo" className='h-28 mb-10' />
                    <ul className='text-base'>
                        <li className='mb-1'>Shoes</li>
                        <li className='mb-1'>Clothing</li>
                        <li className='mb-1'>Accessories</li>
                    </ul>

                </div>
            </div>
        </div>
  )
}

export default CategoriesLifestyle
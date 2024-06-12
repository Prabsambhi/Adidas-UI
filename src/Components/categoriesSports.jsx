import React from 'react'
import Football from '../assets/sports/football.jpg';
import Cricket from '../assets/sports/cricket.jpg';
import Gym from '../assets/sports/gym.jpg';
import Outdoor from '../assets/sports/outdoor.jpg';
import Running from '../assets/sports/running.jpg';

const CategoriesSports = ({ onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className=" bg-white pt-10 pb-20"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex justify-evenly ">
                <div>
                    <h3 className="text-lg font-bold mb-4">FOOTBALL</h3>
                    <img src={Football} alt="logo" className='h-20 mb-10' />
                    <ul className='text-base'>
                        <li className='mb-1'>Boots</li>
                        <li className='mb-1'>Training Wear</li>
                        <li className='mb-1'>Jerseys</li>
                        <li className='mb-1'>All Accessories</li>
                    </ul>

                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">RUNNING</h3>
                    <img src={Running} alt="logo" className='h-20 mb-10' />
                    <ul className='text-base'>
                        <li className='mb-1'>Shoes</li>
                        <li className='mb-1'>Clothing</li>
                        <li className='mb-1'>Accessories</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">OUTDOOR</h3>
                    <img src={Outdoor} alt="logo" className='h-20 mb-10' />
                    <ul className='text-base'>
                        <li className='mb-1'>Shoes</li>
                        <li className='mb-1'>Clothing</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">GYM & TRAINING</h3>
                    <img src={Gym} alt="logo" className='h-20 mb-10' />
                    <ul className='text-base'>
                        <li className='mb-1'>Shoes</li>
                        <li className='mb-1'>Clothing</li>
                        <li className='mb-1'>Accessories</li>
                    </ul>

                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">CRICKET</h3>
                    <img src={Cricket} alt="logo" className='h-20 mb-10' />
                    <ul className='text-base'>
                        <li className='mb-1'>Cricket Jerseys</li>
                        <li className='mb-1'>Cricket Pants</li>
                        <li className='mb-1'>Shoes</li>
                    </ul>

                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">OTHER SPORTS</h3>
                    <ul className='text-base'>
                        <li className='mb-1'>Tennis</li>
                        <li className='mb-1'>Basketball</li>
                        <li className='mb-1'>Yoga</li>
                        <li className='mb-1'>Swim</li>
                        <li className='mb-1'>Skateboarding</li>
                        <li className='mb-1'>Walking</li>
                        <li className='mb-1'>Golf</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default CategoriesSports
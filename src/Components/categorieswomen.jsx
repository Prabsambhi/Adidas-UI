import React from 'react';

const Categorieswomen = ({ onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className=" bg-white pt-10 pb-20"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>

            <div className=" flex justify-evenly">
                <div>
                    <h3 className="text-lg font-bold mb-4">CLOTHING</h3>
                    <ul className='text-base'>
                        <li className='mb-1'>T-Shirts and Tank Tops</li>
                        <li className='mb-1'>Running</li>
                        <li className='mb-1'>Tracksuits</li>
                        <li className='mb-1'>Jackets</li>

                        <li className='mb-1'>Originals</li>
                        <li className='mb-1'>Sweatshirts</li>
                        <li className='mb-1'>Joggers & Track Pants</li>

                        <li className='mb-1'>Shorts</li>
                        <li className='mb-1'>Hoodies</li>
                        <li className='mb-1'>Football Jerseys & T-shirts</li>
                        <li className='mb-1'>Swimwear</li>
                        <li className='mb-1'>Cricket Jerseys & Pant</li>

                    </ul>
                </div>
                <div >
                    <h3 className="text-lg font-bold mb-4">FOOTWARE</h3>
                    <ul className='text-base'>
                        <li className='mb-1'>Running</li>
                        <li className='mb-1'>Sneakers</li>
                        <li className='mb-1'>Cricket</li>
                        <li className='mb-1'>Football</li>
                        <li className='mb-1'>Originals</li>
                        <li className='mb-1'>Slides & Sandals</li>
                        <li className='mb-1'>Swim</li>
                        <li className='mb-1'>Hiking & Oudoor</li>
                        <li className='mb-1'>Walking</li>
                        <li className='mb-1'>Basketball</li>
                        <li className='mb-1'>Tennis</li>
                        <li className='mb-1'>Skateboarding</li>

                    </ul>

                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">ACCESSORIES</h3>
                    <ul className='text-base'>
                        <li className='mb-1'>Balls</li>
                        <li className='mb-1'>Gloves & Scarves</li>
                        <li className='mb-1'>Socks</li>
                        <li className='mb-1'>Headwear</li>
                        <li className='mb-1'>Gym & Training Bags</li>
                        <li className='mb-1'>All Bags</li>
                        <li className='mb-1'>Bagpacks</li>
                        <li className='mb-1'>Face Covers</li>
                    </ul>


                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">SPORTS</h3>
                    <ul className='text-base'>
                        <li className='mb-1'>Running</li>
                        <li className='mb-1'>Tennis</li>
                        <li className='mb-1'>Basketball</li>
                        <li className='mb-1'>Gym & Training</li>

                        <li className='mb-1'>Cricket</li>
                        <li className='mb-1'>Golf</li>
                        <li className='mb-1'>Yoga</li>
                        <li className='mb-1'>Walking</li>
                        <li className='mb-1'>Hiking & Outdoor</li>
                        <li className='mb-1'>Swim</li>
                        <li className='mb-1'>Skateboearding</li>
                        <li className='mb-1'>Football</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Categorieswomen;

import React from 'react'

const CategoriesOutlet = ({ onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className=" bg-white pt-10 pb-20"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex justify-evenly ">
                <div>
                    <h3 className="text-lg font-bold mb-4">MEN</h3>
                    <ul className='text-base'>
                        <li className='mb-1'>All Men's</li>
                        <li className='mb-1'>Footware</li>
                        <li className='mb-1'>Clothing</li>
                        <li className='mb-1'>Accessories</li>
                    </ul>

                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">WOMEN</h3>
                    <ul className='text-base'>
                        <li className='mb-1'>All Women's</li>
                        <li className='mb-1'>Footware</li>
                        <li className='mb-1'>Clothing</li>
                        <li className='mb-1'>Accessories</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">KIDS</h3>
                    <ul className='text-base'>
                        <li className='mb-1'>Kids</li>
                        <li className='mb-1'>Footware</li>
                        <li className='mb-1'>Clothing</li>
                        <li className='mb-1'>Accessories</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CategoriesOutlet
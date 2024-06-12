import React from 'react'

const CategoriesKids = ({ onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className=" bg-white pt-10 pb-20"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex justify-evenly ">
                <div>
                    <h3 className="text-lg font-bold mb-4">YOUTH 8-16 YEARS</h3>
                    <ul className='text-base'>
                        <li className='mb-1'>Boys Shoes</li>
                        <li className='mb-6'>Girls Shoes</li>
                        <li className='mb-1'>Boys Clothing</li>
                        <li className='mb-6'>Girls Clothing</li>
                        <li className='mb-1'>Accessories</li>
                    </ul>

                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">KIDS 4-8 YEARS</h3>
                    <ul className='text-base'>
                    <li className='mb-1'>Boys Shoes</li>
                        <li className='mb-6'>Girls Shoes</li>
                        <li className='mb-1'>Boys Clothing</li>
                        <li className='mb-6'>Girls Clothing</li>
                        <li className='mb-1'>Accessories</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">TODDLERS 0-4 YEARS</h3>
                    <ul className='text-base'>
                        <li className='mb-1'>Shoes</li>
                        <li className='mb-1'>Clothing</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CategoriesKids
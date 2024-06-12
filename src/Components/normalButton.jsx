import React, { useState }  from 'react'

const normalButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div className='w-auto flex px-16 mt-14 space-x-3'>
                <div className='bg-black text-white font-bold py-2 px-4 cursor-pointer'>New arrivals</div>
                <div className='bg-white font-bold py-2 px-4 border-black border cursor-pointer'onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ color: isHovered ? 'white' : 'black', backgroundColor: isHovered ? 'black' : 'white'}}
            >Best of adidas</div>
            </div>
        </>
    )
}

export default normalButton
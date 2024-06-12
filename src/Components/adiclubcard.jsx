import React, { useState } from 'react'

const adiclubcard = ({ heading, subheading, buttontext, imagePath }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <img src={imagePath} alt={"adiclub"} className="object-cover" />
            <div className='mt-2 whitespace-normal text-black font-bold'>{heading}</div>
            <div className='mt-2 whitespace-normal text-xs mb-12'>{subheading}</div>
            <button className='text-sm text-black underline font-semibold w-fit absolute bottom-0'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ color: isHovered ? 'white' : 'black', backgroundColor: isHovered ? 'black' : 'white'}}
            >{buttontext}</button>
        </>

    )
}

export default adiclubcard
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heartImage from '../assets/heart1.png';

const ProductCard = ({ name, price, description, imagePath,discount,discounted }) => {
    const [isHovered, setIsHovered] = useState(false);

    if(discount==0){
    return (
        <Link to='/productDetails'><div className='w-auto' onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className='relative' >
                <img src={imagePath} alt={name} className="object-cover" />
                <div className={`absolute bg-white left-2 px-1`}
                    style={{ bottom: isHovered ? '5px' : '0px', transition: 'bottom 0.3s ease' }}>{price}</div>
                <img src={heartImage} alt="My Image" className='h-5 absolute right-2 top-2' />
            </div>
            <div className='ml-2 mt-2 whitespace-normal'>{name}</div>
            <div className='ml-2 text-sm text-gray-500 whitespace-normal'>{description}</div>
        </div>
        </Link>
    );
}
    else{
        return (
        <div className='w-auto' onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className='relative' >
                <img src={imagePath} alt={name} className="object-cover" />
                <div className={`absolute bg-white left-2 px-1`}
                    style={{ bottom: isHovered ? '5px' : '0px', transition: 'bottom 0.3s ease' }}><span className="text-neutral-500 line-through">{price}</span> <span className="text-red-500">{discounted}</span></div>
                <img src={heartImage} alt="My Image" className='h-5 absolute right-2 top-2' />
                <div className={`absolute bg-white left-2 bottom-7 px-1`}
                    style={{ bottom: isHovered ? '33px' : '28px', transition: 'bottom 0.3s ease', fontWeight: 'bold'}}>-30%</div>
            </div>
            <div className='ml-2 mt-2 whitespace-normal'>{name}</div>
            <div className='ml-2 text-sm text-gray-500 whitespace-normal'>{description}</div>
        </div>
        );
    }
}

export default ProductCard;

import React, { useState } from 'react'
import myImage from '../assets/logo.png';
import profileImage from '../assets/profile.png';
import heartImage from '../assets/heart.png';
import bagImage from '../assets/bag.png';
import Categoriesmen from '../Components/categoriesMen';
import Categorieswomen from '../Components/categorieswomen';
import CategoriesKids from '../Components/categoriesKids';
import CategoriesOutlet from '../Components/categoriesOutlet';
import CategoriesSports from '../Components/categoriesSports';
import CategoriesLifestyle from '../Components/categoriesLifestyle';
import { Link } from 'react-router-dom';

const header = () => {
  const [isMenHovered, setIsMenHovered] = useState(false);
  const [isWomenHovered, setIsWomenHovered] = useState(false);
  const [isKidsHovered, setIsKidsHovered] = useState(false);
  const [isOutletHovered, setIsOutletHovered] = useState(false);
  const [isSportsHovered, setIsSportsHovered] = useState(false);
  const [isCategoriesHovered, setIsCategoriesHovered] = useState(false);

  return (
    <>
      <header className="flex items-baseline justify-between bg-white px-9 space-x-4">
        <img src={myImage} alt="logo" className='h-9 mr-44' />
        <div className="flex items-baseline ">
          <div className="text-black font-bold py-4 px-3 border-b-4 border-transparent hover:border-black"
            onMouseEnter={() => setIsMenHovered(true)}
            onMouseLeave={() => setIsMenHovered(false)}>
            MEN
          </div>

          <div className="text-black font-bold py-4 px-3 border-b-4 border-transparent hover:border-black"
            onMouseEnter={() => setIsWomenHovered(true)}
            onMouseLeave={() => setIsWomenHovered(false)}
          >WOMEN</div>
          <div className="text-black font-bold py-4 px-3 border-b-4 border-transparent hover:border-black"
            onMouseEnter={() => setIsKidsHovered(true)}
            onMouseLeave={() => setIsKidsHovered(false)}
          >KIDS</div>
          <div className="text-black py-4 px-3 border-b-4 border-transparent hover:border-black"
           onMouseEnter={() => setIsSportsHovered(true)}
            onMouseLeave={() => setIsSportsHovered(false)}
          >SPORTS</div>
          <div className="text-black py-4 px-3 border-b-4 border-transparent hover:border-black"
          onMouseEnter={() => setIsCategoriesHovered(true)}
            onMouseLeave={() => setIsCategoriesHovered(false)}
          
          >LIFESTYLE</div>
          <div className="text-red-600 font-semibold py-4 px-3 border-b-4 border-transparent hover:border-red-500"
           onMouseEnter={() => setIsOutletHovered(true)}
            onMouseLeave={() => setIsOutletHovered(false)}
          >OUTLET</div>
        </div>
        <div className="flex items-center justify-center space-x-6">
          <input type="text" placeholder="Search" className='px-2 py-1 border rounded-lg bg-zinc-200' />
          <img src={profileImage} alt="My Image" className='h-5 ' />
          <img src={heartImage} alt="My Image" className='h-5' />
          <Link to='/cart'><img src={bagImage} alt="My Image" className='h-5' /></Link>
        </div>
      </header>
      {isWomenHovered && <Categorieswomen onMouseEnter={() => setIsWomenHovered(true)} onMouseLeave={() => setIsWomenHovered(false)} />}
      {isMenHovered && <Categoriesmen onMouseEnter={() => setIsMenHovered(true)} onMouseLeave={() => setIsMenHovered(false)} />}
      {isKidsHovered && <CategoriesKids onMouseEnter={() => setIsKidsHovered(true)} onMouseLeave={() => setIsKidsHovered(false)} />}
      {isOutletHovered && <CategoriesOutlet onMouseEnter={() => setIsOutletHovered(true)} onMouseLeave={() => setIsOutletHovered(false)} />}
      {isSportsHovered && <CategoriesSports onMouseEnter={() => setIsSportsHovered(true)} onMouseLeave={() => setIsSportsHovered(false)} />}
      {isCategoriesHovered && <CategoriesLifestyle onMouseEnter={() => setIsCategoriesHovered(true)} onMouseLeave={() => setIsCategoriesHovered(false)} />}
    </>
  )
}
export default header
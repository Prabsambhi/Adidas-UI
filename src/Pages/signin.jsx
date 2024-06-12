import React from 'react'
import { FaCheck } from 'react-icons/fa';
import Fullheader from '../Headers/fullheader';
import Topfooter from '../footers/topfooter';
import Middlefooter from '../footers/middlefooter';
import Bottomfooter from '../footers/bottomfooter';
import Sign from '../Components/sign';
import Loginbanner from '../assets/loginbanner.png';

const signin = () => {
  return (
    <>
      <Fullheader />
      <div className='flex py-20 px-32 space-x-16'>
        <div className='w-1/2 space-y-5'>
          <img src={Loginbanner} alt="loginbanner" className='' />
          <h1 className='text-4xl font-bold mt-10'>JOIN THE CLUB. GET REWARDED.</h1>
          <p className='text-lg'>JOIN ADICLUB. GET REWARDED TODAY.</p>
          <ul className="list-none p-0 ml-3">
            <li className="flex items-center mb-4">
              <FaCheck className="mr-2"/>
              Free delivery
            </li>
            <li className="flex items-center mb-4">
              <FaCheck className="mr-2" />
              A 15% off voucher for your next purchase
            </li>
            <li className="flex items-center mb-4">
              <FaCheck className="mr-2" />
              Access to Members Only products and sales
            </li>
            <li className="flex items-center mb-4">
              <FaCheck className="mr-2" />
              Access to adidas Running and Training apps
            </li>
            <li className="flex items-center mb-4">
              <FaCheck className="mr-2" />
              Special offers and promotions
            </li>
          </ul>
          <p className='text-base'>Join now to start earning points, reach new levels and unlock more rewards and benefits from adiClub.</p>
        </div>
        <div className='w-1/2'>
          <Sign />
        </div>
      </div>
      <Topfooter />
      <Middlefooter />
      <Bottomfooter />
    </>
  )
}

export default signin;
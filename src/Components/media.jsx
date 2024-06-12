import React from 'react';
import MyVideo from '../assets/video1.mp4';
import MyBanner from '../assets/banner.jpeg'
import Linkbutton from '../Components/linkbutton';

function media() {
    return (
        <>
            <div className="relative h-screen bg-black text-white" >
                <div class="absolute z-10 bottom-44 ml-16">
                    <h1 className='text-4xl font-bold'>SAMBA,SPECIAL & GAZELLE</h1>
                    <p className='mt-4 text-lg'>Three icons, a thousand stories.</p>
                    <Linkbutton heading="SHOP NOW"/>
                </div>
                <video autoPlay loop muted className="object-cover absolute w-full h-full z-0 opacity-60">
                    <source src={MyVideo} type="video/mp4" />
                </video>
            </div>
            <div className="relative h-screen bg-black text-white">
                <div class="absolute z-10 bottom-44 left-16">
                    <h1 className='text-4xl font-bold'>FEAR OF GOD ATHLETICS</h1>
                    <p className='mt-4 text-lg'>Available now.</p>
                    <Linkbutton heading="SIGN UP"/>
                </div>
                <img src={MyBanner} alt="Media" className="object-cover absolute w-full h-full z-0 opacity-70" />
            </div>
        </>
    );
}

export default media;

import React from 'react';
import Sign from '../Components/sign';
import Cross from '../assets/cross.png';

const signup = ({ onClose }) => {
    
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center z-20'>
            <div className='bg-white whitespace-normal w-1/3 h-3/4 overflow-y-scroll px-8 py-8 relative z-30'>
            <button onClick={onClose} className='absolute right-0 top-0 z-50 border-black border '> <img src={Cross} alt="logo" className='h-14' /></button>
                <Sign/>
            </div>
        </div>
    );
};

export default signup;

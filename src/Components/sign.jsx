import React, { useState } from 'react'
import Linkbutton from '../Components/linkbutton2';
import Adiclub from '../assets/adiclub.gif';
import Apple from '../assets/applelogo.png';
import Facebook from '../assets/fblogo.png';
import Google from '../assets/googlelogo.png';

const sign = () => {
    const [email, setEmail] = useState('');
    const [marketingConsent, setMarketingConsent] = useState(false);
    const [termsAndConditions, setTermsAndConditions] = useState(false);
    const [stayLoggedIn, setStayLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (

        <div className='space-y-5 '>
            <img src={Adiclub} alt="logo" className='h-16' />
            <h1 className='text-3xl font-bold my-6 mr-4'>YOUR ADICLUB BENEFITS AWAIT</h1>
            <p className='text-sm'>Get free shipping, discount vouchers and members only products when you`re in adiClub.</p>
            <p className='font-bold'>Log in or sign up (it`s free)</p>
            <div className='flex space-x-3'>
                <button className='bg-white py-3 px-3 border-black border'> <img src={Apple} alt="logo" className='h-6' /></button>
                <button className='bg-white py-3 px-3 border-black border'><img src={Facebook} alt="logo" className='h-6' /></button>
                <button className='bg-white py-3 px-3 border-black border'><img src={Google} alt="logo" className='h-6' /></button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col space-y-5'>
                    <label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='px-4 py-3 w-full border-black border bg-white focus:outline-none'
                            placeholder="EMAIL ADDRESS"
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={marketingConsent}
                            onChange={(e) => setMarketingConsent(e.target.checked)}
                            className="h-5 w-5 mr-2"
                        />
                        I would like to stay up to date with adidas. I agree to receive personalised marketing messages from adidas India Marketing Pvt. Ltd.
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={termsAndConditions}
                            onChange={(e) => setTermsAndConditions(e.target.checked)}
                            className="h-5 w-5 mr-2"
                        />
                        I have read and accepted the Terms & Conditions, the adiClub Terms & Conditions and the adidas Privacy Policy.
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={stayLoggedIn}
                            onChange={(e) => setStayLoggedIn(e.target.checked)}
                            className="h-5 w-5 mr-2"
                        />
                        Keep me logged in. Applies to all options.
                    </label>
                    <button ><Linkbutton heading="CONTINUE" /></button>
                </div>
            </form>
        </div>
    )
}

export default sign
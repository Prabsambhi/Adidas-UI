import React from 'react'
import Fullheader from '../Headers/fullheader';
import Topfooter from '../footers/topfooter';
import Middlefooter from '../footers/middlefooter';
import Bottomfooter from '../footers/bottomfooter';
import CartProducts from '../Components/cartProducts';

const cart = () => {

    return (
        <>
            <Fullheader />
            <CartProducts/>    
            <Topfooter />
            <Middlefooter />
            <Bottomfooter />
        </>
    );

}

export default cart
import React from 'react'
import Fullheader from '../Headers/fullheader';
import Media from '../Components/media';
import Popular from '../Components/popular';
import Adidasinfo from '../Components/adidasinfo';
import Normalbutton from '../Components/normalButton';
import Productlist from '../Components/productlist';
import Adiclublist from '../Components/adiclublist';
import Topfooter from '../footers/topfooter';
import Middlefooter from '../footers/middlefooter';
import Bottomfooter from '../footers/bottomfooter';


const home = () => {
    return (
        <>
            <Fullheader />
            <Media />
            <Popular />
            <Normalbutton />
            <Productlist />
            <Adiclublist />
            <Adidasinfo />
            <Topfooter />
            <Middlefooter />
            <Bottomfooter />
        </>
    )
}

export default home
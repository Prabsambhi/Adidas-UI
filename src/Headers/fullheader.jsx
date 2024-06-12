import React from 'react'
import Header from '../Headers/header';
import Topbanner from '../Headers/topbanner';
import Middleheader from '../Headers/middleheader';


const fullheader = () => {
    return (
        <div>
            <Topbanner />
            <Middleheader />
            <Header />
        </div>
    )
}

export default fullheader;

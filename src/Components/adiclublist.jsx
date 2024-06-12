import React from 'react'
import Adiclubcard from '../Components/adiclubcard';
import Adiclubdata from '../data/adiclubdata'; 

const adiclublist = () => {
  return (
    <><h1 className='text-4xl font-bold ml-16'>ADICLUB DAYS ARE HERE</h1>
    <p className='mt-4 text-lg ml-16'>Unforgettable experiences, exclusive drops and more. You're in for a treat.</p>
    <div className="mx-16 mb-10 mt-8 flex overflow-x-auto whitespace-nowrap" >
            <div className="flex space-x-4 mb-10 ">
                {Adiclubdata.map((Adiclubdata, index) => (
                    <div key={index} className=" w-72 flex flex-col relative">
                        <Adiclubcard
                            heading={Adiclubdata.heading}
                            subheading={Adiclubdata.subheading}
                            buttontext={Adiclubdata.buttontext}
                            imagePath={Adiclubdata.imagePath}
                        />
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default adiclublist
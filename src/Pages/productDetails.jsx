import React, { useState, useEffect } from 'react'
import Fullheader from '../Headers/fullheader';
import Topfooter from '../footers/topfooter';
import Middlefooter from '../footers/middlefooter';
import Bottomfooter from '../footers/bottomfooter';
import Linkbutton2 from '../Components/linkbutton2';
import ProductList from '../Components/productlist';
import {useDispatch } from 'react-redux'
import { addTodo } from '../reduxState/features/addtoCartSlice';

const productDetails = () => {
    const dispatch = useDispatch();

    const [showMore, setShowMore] = useState(false);
    const [description, setDescription] = useState(false);
    const [details, setDetails] = useState(false);


    const [color, setColor] = useState(3); // 0 1 2 3

    const colours = [
        'src/assets/productdetails/colours/color1.jpg',
        'src/assets/productdetails/colours/color2.jpg',
        'src/assets/productdetails/colours/color3.jpg',
        'src/assets/productdetails/1.jpg',
    ];

    const names = ['Aluminium / Magic Beige / Off White', 'Dark Marine / Preloved Ink / Night Indigo', 'Cloud White / Red / Crystal White', 'Carbon / Grey Two / Silver Metallic']
    const cost = [
        {
            price: "12 999.00",
            discount: 0,
            discounted: "12 999.00"
        },
        {
            price: "12 999.00",
            discount: 1,
            discounted: "10 999.00"
        },
        {
            price: "12 999.00",
            discount: 1,
            discounted: "9 999.00"
        },
        {
            price: "12 999.00",
            discount: 0,
            discounted: "12 999.00"
        }
    ];

    const [name, setName] = useState(names[3]);

    const [shoeCost, setShoeCost] = useState(cost[3].discounted);
    const [textColor, setTextColor] = useState('text-black');
    const [originalShoeCost, setOriginalShoeCost] = useState(cost[3].price);
    const [showOriginalPrice, setShowOriginalPrice] = useState('hidden');
    const [selectedSize, setSelectedSize] = useState('');


    const sizes = [
        {
            size: "3",
            available: true
        },
        {
            size: "3.5",
            available: false
        },
        {
            size: "4",
            available: true
        },
        {
            size: "4.5",
            available: true
        },
        {
            size: "5",
            available: false
        },
        {
            size: "5.5",
            available: true
        },
        {
            size: "6",
            available: false
        },
        {
            size: "6.5",
            available: false
        },
        {
            size: "7",
            available: true
        },
        {
            size: "7.5",
            available: false
        },
        {
            size: "8",
            available: true
        },
        {
            size: "8.5",
            available: true
        },
    ];

    const images = [
        [
            'src/assets/productdetails/offwhite/1.jpg',
            'src/assets/productdetails/offwhite/2.jpg',
            'src/assets/productdetails/offwhite/3.jpg',
            'src/assets/productdetails/offwhite/4.jpg',
            'src/assets/productdetails/offwhite/5.jpg',
            'src/assets/productdetails/offwhite/6.jpg',
            'src/assets/productdetails/offwhite/7.jpg',
            'src/assets/productdetails/offwhite/8.jpg',
        ],
        [
            'src/assets/productdetails/indigo/1.jpg',
            'src/assets/productdetails/indigo/2.jpg',
            'src/assets/productdetails/indigo/3.jpg',
            'src/assets/productdetails/indigo/4.jpg',
            'src/assets/productdetails/indigo/5.jpg',
            'src/assets/productdetails/indigo/6.jpg',
            'src/assets/productdetails/indigo/7.jpg',
            'src/assets/productdetails/indigo/8.jpg',
        ],
        [
            'src/assets/productdetails/white/1.jpg',
            'src/assets/productdetails/white/2.jpg',
            'src/assets/productdetails/white/3.jpg',
            'src/assets/productdetails/white/4.jpg',
            'src/assets/productdetails/white/5.jpg',
            'src/assets/productdetails/white/6.jpg',
            'src/assets/productdetails/white/7.jpg',
            'src/assets/productdetails/white/8.jpg',
        ],
        [
            'src/assets/productdetails/1.jpg',
            'src/assets/productdetails/2.jpg',
            'src/assets/productdetails/3.jpg',
            'src/assets/productdetails/4.jpg',
            'src/assets/productdetails/5.jpg',
            'src/assets/productdetails/6.jpg',
            'src/assets/productdetails/7.jpg',
            'src/assets/productdetails/8.jpg'
        ],
    ];

    const tabledata = [
        { name: 'Name and Address of Importer', address: 'adidas India Marketing Private Limited, Office no. 6, 2nd Floor, Sector-B, Pocket no. 7, Plot no. 11, Vasant Kunj, New Delhi - 110070' },
        { name: 'Net Quantity', address: '1 Pair' },
        { name: 'Gender', address: 'Men' },
        { name: 'Country of Origin', address: 'China' },
    ];

    const [pictures, setPictures] = useState(images[3]);
    const [visibleImages, setVisibleImages] = useState(showMore ? images[3] : images[3].slice(0, 4));

    const handleColorClick = (index) => {
        setColor(index);
        setPictures(images[index]);
        setName(names[index]);
    };

    useEffect(() => {
        setVisibleImages(showMore ? pictures : pictures.slice(0, 4));
    }, [showMore, pictures]);

    const createMouseEnterHandler = (index) => () => {
        setName(names[index]);
        setShoeCost(cost[index].discounted);
        setOriginalShoeCost(cost[index].price);
        if (cost[index].discount === 1) {
            setTextColor('text-red-500');
            setShowOriginalPrice('');
        }
        else {
            setShowOriginalPrice('hidden');
            setTextColor('text-black');
        }
    };
    const createMouseLeaveHandler = (color) => () => {
        setName(names[color]);
        setShoeCost(cost[color].discounted);
        setOriginalShoeCost(cost[color].price);
        if (cost[color].discount === 1) {
            setTextColor('text-red-500');
            setShowOriginalPrice('');
        }
        else {
            setTextColor('text-black');
            setShowOriginalPrice('hidden');
        }
    };

    const selectShoeSize = (size) => () => {
        dispatch(addTodo({ size: size, colour: names[color], price: parseFloat(cost[color].discounted.replace(/[^\d.]/g, '')), image: images[color][0] }));
        setSelectedSize(size);
    };

    useEffect(() => {
        console.log(selectedSize);
    }, [selectedSize]);

    return (
        <>
            <Fullheader />
            <div className='flex mb-4 h-max-content'>
                <div className='w-2/3 border-r border-zinc-200 overflow-y-auto'>
                    <div className='relative flex flex-col items-center mb-20'>
                        <div className="grid grid-cols-2 gap-1 ">
                            {visibleImages.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index + 1}`} />
                            ))}
                        </div>
                        <button onClick={() => setShowMore(!showMore)} className='absolute -bottom-5 bg-white font-bold py-4 px-8 border-black border cursor-pointer text-stone-600'>
                            {showMore ? 'SHOW LESS' : 'SHOW MORE'}
                        </button>
                    </div>
                    <div className='px-8'>
                        <button className='font-bold text-base px-4 py-8 border-t border-zinc-300 w-full flex justify-start' onClick={() => setDescription(!description)}>
                            Description
                        </button>

                        {description ? <>
                            <div className='flex py-5 items-center'>
                                <div className='py-5 px-10' >
                                    <h1 className='text-3xl font-bold'>'90S-INSPIRED SHOES MADE FOR ALL-DAY COMFORT.</h1>
                                    <p className='mt-4 text-base'>Experience the energy and expressiveness of the '90s. Whether heading out for a night with friends or gearing up for an active day, these adidas shoes have a mesh design and a cushy midsole that provides lasting, lightweight comfort. A snug yet breathable upper hugs your foot in retro-inspired style, calling on the bold and vibrant decade that continues to shape culture today.</p>
                                </div>
                                <img src='src/assets/productdetails/4.jpg' alt="logo" className='w-2/5 ' />
                            </div>
                        </> : ''}

                        <button className='font-bold text-base px-4 py-8 border-t border-b border-zinc-300 w-full flex justify-start'
                            onClick={() => setDetails(!details)}
                        >
                            Details
                        </button>

                        {
                            details ? <>
                                <div className="flex ">
                                    <div className="w-1/2">
                                        <ul className="list-disc py-4 px-8">
                                            <li className='mb-4'>Regular fit</li>
                                            <li className='mb-4'>Lace closure</li>
                                            <li className='mb-4'>Mesh upper</li>
                                            <li className='mb-4'>Snug feel</li>
                                            <li className='mb-4'>EVA midsole</li>
                                        </ul>
                                    </div>
                                    <div className="w-1/2">
                                        <ul className="list-disc py-4 px-8">
                                            <li className='mb-4'>Adiprene and Adiprene+ drop-ins</li>
                                            <li className='mb-4'>Rubber outsole</li>
                                            <li className='mb-4'>Colour: Carbon / Grey Two / Silver Metallic</li>
                                            <li className='mb-4'>Product code: IF6495</li>
                                        </ul>
                                    </div>
                                </div>
                                <table>
                                    <thead>
                                        <tr className='border-white'>
                                            <th className='bg-black py-4 text-white border-white'>Attribute</th>
                                            <th className='bg-black py-4 text-white border-white'>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-align'>
                                        {tabledata.map((item, index) => (
                                            <tr key={index}>
                                                <td className=' border-zinc-400 border px-4 py-4 text-center w-1/2 text-sm'>{item.name}</td>
                                                <td className='bg-zinc-200 border-zinc-400 border px-4 py-4 text-center text-sm'>{item.address}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </> : ''
                        }

                        {/* <button className='font-bold text-base px-4 py-8 border-t border-zinc-300 w-full flex justify-start'>
                            Reviews
                        </button> */}
                    </div>
                    <h1 className='text-3xl font-bold px-8 mt-24 mb-20'>YOU MAY ALSO LIKE</h1>
                    <ProductList />

                </div>
                <div className='w-1/3 p-8'>

                    <h1 className='text-3xl font-bold'>OZWEEGO SHOES</h1>
                    <p className='mt-4 text-sm'>MRP in Indian currency:</p>
                    <p> <span className={`line-through text-neutral-500 ${showOriginalPrice} mr-2`}>{originalShoeCost}</span>
                        <span className={`mt-0.5 text-base font-bold ${textColor} `}>{shoeCost}</span> <span className='mt-4 text-sm font-normal text-black'>per pair</span></p>
                    <p className='mt-0.5 text-sm'>(Inclusive of tax)</p>
                    <p className=' mt-10 text-base font-bold'>Colours</p>
                    <div className="grid grid-cols-4 gap-1 mr-16 mt-4">
                        {colours.map((image, index) => (
                            ((index === color) ? (
                                <img key={index} src={image} alt={`Image ${index + 1}`}

                                    className='border-b-4 border-black cursor-pointer'
                                    onClick={() => handleColorClick(index)}
                                    onMouseEnter={createMouseEnterHandler(index)}
                                    onMouseLeave={createMouseLeaveHandler(color)}
                                />
                            ) :
                                (<img key={index} src={image} alt={`Image ${index + 1}`}

                                    className='border-b-4 border-transparent hover:border-black cursor-pointer'
                                    onClick={() => handleColorClick(index)}
                                    onMouseEnter={createMouseEnterHandler(index)}
                                    onMouseLeave={createMouseLeaveHandler(color)}
                                />)
                            )
                        ))}

                    </div>
                    <p className=' mt-1 text-sm text-zinc-700'>{name}</p>

                    <p className=' mt-10 text-base font-bold'>Sizes</p>
                    <div className="grid grid-cols-5 mt-4 mb-2">
                        {sizes.map((data, index) => {
                            if (data.available == true) {
                                if (selectedSize === data.size) {
                                    return <button className='bg-black text-white border border-zinc-200 py-2'>{data.size}</button>;
                                }
                                else {
                                    return <button className='bg-white hover:bg-black text-black hover:text-white border border-zinc-200 py-2'
                                        onClick={selectShoeSize(data.size)}
                                    >{data.size}</button>;
                                }

                            }
                            else {
                                return <button className='border border-zinc-200  py-2 line-through text-zinc-400 hover:text-red-500'
                                // onClick={() => setSelectedSize(data.size)}
                                >{data.size}</button>
                            }
                        })}
                    </div>

                    <button className=" underline whitespace-normal hover:bg-black hover:text-white mb-16">
                        Size guide
                    </button>
                    <Linkbutton2 heading="ADD TO BAG" />

                    <ul className="list-disc ml-4 mt-4 space-y-3 cursor-pointer" >
                        <li className=" underline whitespace-normal hover:bg-black hover:text-white">
                            Free Delivery, Free Returns
                        </li>
                        <li className=" underline whitespace-normal hover:bg-black hover:text-white ">
                            Delivery within: Metro cities:2-3 days , Others: 4-5 days
                        </li>
                        <li className="underline whitespace-normal hover:bg-black hover:text-white">
                            COD available for orders below ₹5000
                        </li>
                        <li className=" underline whitespace-normal hover:bg-black hover:text-white">
                            Secure transactions with hassle free 14 days Exchange and Returns
                        </li>
                        <li className=" underline whitespace-normal hover:bg-black hover:text-white">
                            Save 5% on all Online Payments under Rs 5000/-
                        </li>
                    </ul>
                </div>
            </div>
            <Topfooter />
            <Middlefooter />
            <Bottomfooter />
        </>
    )
}

export default productDetails
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo,increaseItemUnits, decreaseItemUnits, selectTotalAmount } from '../reduxState/features/addtoCartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const cartProducts = () => {

    const todos = useSelector(state => state.cartitems);
    const totalAmount = useSelector(selectTotalAmount);
    const dispatch = useDispatch();

    const increaseUnits = (id) => {
        dispatch(increaseItemUnits(id));
    };

    const decreaseUnits = (id) => {
        dispatch(decreaseItemUnits(id));
    };

    return (
        <>
            <div className='m-4 flex flex-col justify-center'>
                {
                    todos.map((item) => (
                        <div className='m-4 flex ' key={item.id}>
                            <div className=''><img key={item.id} src={item.image} alt={`Image`} className='h-48' />
                            </div>
                            <div className='p-3 relative w-1/3'>
                                <div className='font-bold'>{`Size: ${item.size}`}</div>
                                <div className='whitespace-normal'>{item.colour}</div>
                                <div>₹{item.price}</div>
                                <div className='mt-2'>{`Units: ${item.units}`}</div>
                                <div className='font-bold absolute right-0 bottom-0'>
                                    <button onClick={() => increaseUnits(item.id)}><FontAwesomeIcon icon={faPlus} /></button>
                                    <button onClick={() => decreaseUnits(item.id)} className='ml-2'><FontAwesomeIcon icon={faMinus} /></button>
                                </div>
                                <button className="text-black bg-white absolute bottom-0" onClick={() => dispatch(removeTodo(item.id))}><i className="material-icons">delete</i></button>
                            </div>
                        </div>
                    ))}

                    <h1 className='m-4 text-xl font-bold'>TOTAL: ₹{totalAmount}</h1>
            </div>
        </>
    )
}

export default cartProducts
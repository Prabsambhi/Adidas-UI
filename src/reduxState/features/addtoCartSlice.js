import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    cartitems: []
}

export const addtocartSlice = createSlice({

    name: 'addtocart',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const { size, colour, price, image } = action.payload;
            const existingItem = state.cartitems.find(item => (
                item.size === size && 
                item.colour === colour &&
                item.price === price
            ));

            if (existingItem) {
    
                existingItem.units += 1;
            } else {
  
                const newItem = {
                    id: nanoid(),
                    size: size,
                    colour: colour,
                    price: price,
                    image: image,
                    units: 1 
                };
                state.cartitems.push(newItem);
            }
        },
        removeTodo: (state, action) => {
            state.cartitems = state.cartitems.filter((item) => item.id !== action.payload)
        },
        increaseItemUnits: (state, action) => {
            const item = state.cartitems.find(item => item.id === action.payload);
            if (item) {
                item.units += 1;
            }
        },
        decreaseItemUnits: (state, action) => {
            const item = state.cartitems.find(item => item.id === action.payload);
            if (item && item.units > 0) {
                item.units -= 1;
            }
        }
    }

})

export const selectTotalAmount = state => {
    return state.cartitems.reduce((total, item) => {
        return total + (item.price * item.units);
    }, 0);
};

export const { addTodo, removeTodo,increaseItemUnits, decreaseItemUnits } = addtocartSlice.actions

export default addtocartSlice.reducer
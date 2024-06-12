import {configureStore} from '@reduxjs/toolkit';
import AddtoCartReducer from '../features/addtoCartSlice';

export const store=configureStore({
    reducer: AddtoCartReducer
})
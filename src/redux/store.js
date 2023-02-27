/* eslint-disable */
import {configureStore} from '@reduxjs/toolkit'
import bookSlice from './booksSlice'
import cartSlice from './cartSlice'
const store=configureStore({reducer:{booksSlice:bookSlice,cartSlice:cartSlice}})
export default store;


/* eslint-disable */
import React,{useEffect,useCallback} from "react";
import {useSelector,useDispatch} from 'react-redux';
import {bookSliceAction} from '../redux/booksSlice';

//   Component  //
import Add from './add'
import Show from './show'
import Cart from './cart'
///////////////////
function app(){
    const glob=useSelector(state=>state);
    const dispatch=useDispatch();

    return(
        <div>
            <Add/>
            <Show/>
            <Cart/>
            {console.log(glob.booksSlice.books)}
        </div>
    )
}
export default app;
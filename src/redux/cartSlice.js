/* eslint-disable */

import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:"cartSlice",
    initialState:{cart:[]},
    reducers:{
        ADDTOCART:(state,action)=>{state.cart.push(action.payload)},
        EDITCOUNT:(state,action)=>{
            let chosen=state.cart.find((item)=>{
                return item.id==action.payload
            })
           chosen.isCount++
           

        },
        REMOVECART:(state,action)=>{state.cart=action.payload}
        
}
})
export default cartSlice.reducer;
export const cartSliceAction=cartSlice.actions;
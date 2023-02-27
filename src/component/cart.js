/* eslint-disable */
import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import './cart.css'
import { cartSliceAction } from "../redux/cartSlice";

function cart(){
    const dispatch=useDispatch();
    const glob=useSelector(state=>state);
    const {REMOVECART} =cartSliceAction
    const cart=glob.cartSlice.cart;
    const removecart=(e)=>{
       let ncart=cart.filter((item)=>{
            return item.id!==e
        })
       dispatch(REMOVECART(ncart))
    }

    let total=cart.reduce((n,item)=>{
        return parseInt(item.price) + parseInt(n)
    },0)
    return (
        <div className="cart">
            <div className="ti">My cart</div>
            {cart.map((item)=>{
                return <div key={Math.random()} className="book">
                <div>{item.name}</div>
                <div>{item.pages}</div>
                <div>{item.price}</div>
                <div>{item.isCount}</div>
                <div className="btns">
                    <button onClick={()=>removecart(item.id)}>Remove From Cart !</button>
                </div>
            </div>
            })}
            {total!==0?<div className="price">
                <p className="price1">$$</p>
                <p className="price2">Total Price is </p>
                <p className="price3">{total}</p>
            </div>: 
            <div className="nocart">There is No Book in your cart !!!</div>}
        </div>
    )
}
export default cart
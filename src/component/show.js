/* eslint-disable */
import React,{useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { bookSliceAction } from "../redux/booksSlice";
import { cartSliceAction } from "../redux/cartSlice";
import './show.css'
function show(){
    const glob=useSelector(state=>state);
    const books=glob.booksSlice.books;
    const cart=glob.cartSlice.cart;
    const dispatch=useDispatch()
    const {ADDTOCART,EDITCOUNT}=cartSliceAction;
    const {REMOVEBOOK,ADDBOOK,EDITFAV}=bookSliceAction;
    const addtocart=(e)=>{
        let chosen=books.find((item)=>{
            return item.id==e
        })
        let here=cart.find((item)=>{
            return item.name==chosen.name
        })
        if(here){
            dispatch(EDITCOUNT(here.id))
          // لا تستطيع اي كومبونت ان تلمس الاستيت 
          // reducerفلو عايز اغير اي حاجة في الاستيت لازن احطها جوه 
          //reducer مقدرش اعمل كونسول لوج جوا 
        }
        else{
        dispatch(ADDTOCART(chosen))
        }
       
    }
    const removebook=(e)=>{
        let chosen=books.filter((item)=>{
            return item.id!=e
        })
        dispatch(REMOVEBOOK(chosen))  
        
    }
    const addtofav=(e)=>{

        dispatch(EDITFAV(e))
    }
    console.log(books)
    return(
        <div className="show">
            <div className="book">
                <div>Name</div>
                <div>Pages</div>
                <div>Price</div>
            </div>
            {glob.booksSlice.books.map((item)=>{
                return <div key={Math.random()*1000} className="book">
                <div>{item.name}</div>
                <div>{item.pages}</div>
                <div>{item.price}</div>
                <div className="btns">
                    <button onClick={()=>addtocart(item.id)}>Add to cart</button>
                    <button onClick={()=>removebook(item.id)}>Remove this book</button>
                    <button style={{backgroundColor:item.isFav?"red":""}} onClick={()=>addtofav(item.id)}>My Fav</button>
                    {item.isMe==true && <button>Edit Book</button>}
                </div>
            </div>
            })}
        </div>
    )
}
export default show
/* eslint-disable */
import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { bookSliceAction } from "../redux/booksSlice";
import app from "./app";
import './add.css'
function add(){
    const glob=useSelector(state=>state)
    const dispatch=useDispatch()
    const {ADDBOOK}=bookSliceAction;
    const [book,setBook]=useState()
    const [name,setName]=useState()
    const [pages,setPages]=useState()
    const [price,setPrice]=useState()
    const [show,setShow]=useState(false)
    const ok=(e)=>{
        e.preventDefault();
       let booka={id:Math.random(), name:name ,pages:pages,price:price,isCount:1,isMe:true,isFav:false}
        dispatch(ADDBOOK(booka))
        setName("");
        setPages("");
        setPrice("");
        setShow(true)
    }
    return (
        <div className="add">
            <div className="tit">Add New Book</div>
            <form className="forma" onSubmit={ok}>
                <input placeholder="Enter Book Name" type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <input placeholder="Enter Book Pages" type="number" onChange={(e)=>setPages(e.target.value)} value={pages}/>
                <input placeholder="Enter Book Price" type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                <input type="submit" value="Add"/>

            </form>
            {show==true && <div className="complete">Book added Sucessfully !!!</div>}
        </div>        
    )
}
export default add;
import {createSlice} from '@reduxjs/toolkit'

const bookSlice=createSlice({
    name:"bookSlice",
    initialState:{books:[
        {id:(Math.random()),name:"C++",pages:250,price:40,isCount:1 ,isMe:false, isFav:false},
        {id:Math.random(),name:"Java",pages:400,price:70 ,isCount:1 ,isMe:false, isFav:false},
        {id:Math.random(),name:"REACT",pages:250,price:20 ,isCount:1 ,isMe:false, isFav:false},
        {id:Math.random(),name:"Web Design",pages:950,price:120 ,isCount:1 ,isMe:false, isFav:false},


    ]},
    reducers:{
        ADDBOOK:(state,action)=>{state.books.push(action.payload)},
        REMOVEBOOK:(state,action)=>{state.books=action.payload},
        EDITFAV:(state,action)=>{
            let chosen=state.books.find((item)=>{
                return item.id==action.payload
            })
            if(chosen.isFav==false){
                chosen.isFav=true
            }
            else{
                chosen.isFav=false
            }
        }
        
    },
})
export default bookSlice.reducer;
export const bookSliceAction=bookSlice.actions;
import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
          return  {...state,count:0}
        },
        incrementbyuser:(state,actionByCounter)=>{
            state.count+=actionByCounter.payload
        }
    }
})

export const {increment,decrement,reset,incrementbyuser}=counterSlice.actions
export default counterSlice.reducer
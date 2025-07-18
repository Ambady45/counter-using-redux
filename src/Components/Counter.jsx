import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyuser, reset } from '../Redux/counterSlice'



const Counter = () => {
    const [amount,setAmount]=useState(0)
   const {count}=useSelector(state=>state.counterReducer)
   const cDispatch=useDispatch()

   const handleAmount=()=>{
    if(amount){
            cDispatch(incrementbyuser(+amount))
    }else{
        alert("enter a number")
    }
   }
  return (
    <>
                
        <div className=' border rounded p-5 text-center w- 75' style={{height:'auto'}}>
             <h1 style={{fontSize:'100px', marginTop:'15px'}}>{count}</h1>  

            <div className='d-flex justify-content-between my-5 ms-5'style={{width:'90%'}}>
                    <button onClick={()=>cDispatch(decrement())} className='btn btn-warning p-2' style={{width:'100px'}}>Decrement</button>
                    <button onClick={()=>cDispatch(reset())} className='btn btn-danger p-2' style={{width:'75px'}}>Reset</button>
                    <button onClick={()=>cDispatch(increment())} className='btn btn-success p-2'style={{width:'100px'}}>Increment</button>
            </div>

                <div className='d-flex justify-content-between align-items-center'>
                    <input onChange={e=>setAmount(e.target.value)} type="text" placeholder='enter the amount incremented' className='form-control py-4' />
                    <button onClick={handleAmount} className='btn btn-primary p-2 ms-1'style={{width:'150px'}}>Increment by amount</button>
            </div>
        </div>

    </>
  )
}

export default Counter
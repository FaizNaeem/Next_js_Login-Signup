'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.css'
import React from 'react'
import { useState } from 'react'
export default function Todo() {
    const [Todo , setTodo] = useState([])
    const [input ,setInput]= useState('')
  return (
    <div style={{height:"100vh"}}>
        <h1 style={{textAlign:"center" ,}}>hi</h1>

        <div style={{display:"flex" , alignItems:"center", justifyContent:"center" ,height:"100vh", }}>
    <input type="email"   onChange={(e) => setInput(e.target.value)} className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:"300px"}}/>
  <button className='btn btn-success'>Add</button>
  </div>
    </div>
  )
}

'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.css'
// import React from 'react'
import React, { useEffect, useState } from 'react';
// import './todolist.css';
// import './Todo.css';
// import Swal from 'sweetalert2';


export default function Faiz() {
  const [ todo , setTodo]= useState([])
  const [input ,setInput]=useState('')
  const Submit = () => {
setTodo([...todo ,input])
setInput("")
  }
  
  
  return (
    <>
      <h1 className=' text-center'>Todo List </h1>
      <div className='center'>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add Todo"
            aria-label="Username"
            value={input}
            required
            aria-describedby="basic-addon1"
            onChange={(e) => setInput(e.target.value)}
          />
          {/* {btn ? ( */}
            <button className='btn btn-success' type='submit' onClick={Submit}>Add</button>
          {/* ) : ( */}
            {/* <button className='btn btn-success' type='submit' onClick={Submit}>Edit</button> */}
          {/* )} */}
        </div>
        {todo.map((e) => (
          <ul className='row' >
            <h6 className=''>
           {e}
              <button className='btn btn-sm hi btn-danger' onClick={}>
                <i className="fa-solid fa-trash"></i>
              </button>
              <button className='btn btn-success btn-sm '>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </h6>
            <hr />
          </ul>
         ))} 
      </div>
    </>
  );
}

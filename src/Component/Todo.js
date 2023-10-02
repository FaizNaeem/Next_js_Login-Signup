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
  const [edit, setedit] = useState(null);
  const Submit = () => {
      if (edit !== null) {
        const updatedTodo = [...todo];
        updatedTodo[edit] = input;
        setTodo(updatedTodo);
        setInput('');
        setedit(null);
      } else {
      
        setTodo([...todo, input]);
        setInput('');
      }
  }

// ...
const Edit=(i)=>{
  setInput(todo[i]); 
  setedit(i); 
}
// ...

  const Delete=(i)=>{
    const save = todo.filter((e,n) => i !==n);
    setTodo(save);
  }
  
  
  return (
    <>
      <h1 className=' text-center'>Todo With Next Js </h1>
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
            <button className='btn btn-success' type='submit' onClick={Submit}>
            {edit !== null ? 'Edit' : 'Add'}
          </button>
        </div>
        {todo.map((e,i) => (
          <ul className='row' >
            <h6 className=''>
           {e}
              <button className='btn btn-sm hi btn-danger' onClick={()=>Delete(i)}>
                <i className="fa-solid fa-trash"></i>
              </button>
              <button className='btn btn-success btn-sm '  onClick={()=>Edit(i)}>
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

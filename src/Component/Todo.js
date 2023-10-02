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
        // If an index is set, update the item at that index
        const updatedTodo = [...todo];
        updatedTodo[edit] = input;
        setTodo(updatedTodo);
        setInput('');
        setedit(null);
      } else {
        // If no index is set, add a new item
        setTodo([...todo, input]);
        setInput('');
      }
  }

// ...
const Edit=(i)=>{
  setInput(todo[i]); // Set the input value to the item being edited
  setedit(i); // Set the edit index to the item's index
}
// ...

  const Delete=(i)=>{
    const save = todo.filter((e,n) => i !==n);
    setTodo(save);
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
// import React, { useEffect, useState } from 'react';

// export default function Faiz() {
//   const [todo, setTodo] = useState([]);
//   const [input, setInput] = useState('');
//   const [editIndex, setEditIndex] = useState(null); // New state to track the index being edited

//   const handleSubmit = () => {
//     if (editIndex !== null) {
//       // If an index is set, update the item at that index
//       const updatedTodo = [...todo];
//       updatedTodo[editIndex] = input;
//       setTodo(updatedTodo);
//       setInput('');
//       setEditIndex(null);
//     } else {
//       // If no index is set, add a new item
//       setTodo([...todo, input]);
//       setInput('');
//     }
//   };

//   const handleEdit = (i) => {
//     setInput(todo[i]); // Set the input value to the item being edited
//     setEditIndex(i); // Set the edit index to the item's index
//   };

//   const handleDelete = (i) => {
//     const updatedTodo = todo.filter((_, index) => index !== i);
//     setTodo(updatedTodo);
//   };

//   return (
//     <>
//       <h1 className='text-center'>Todo List</h1>
//       <div className='center'>
//         <div className="input-group mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Add Todo"
//             value={input}
//             required
//             onChange={(e) => setInput(e.target.value)}
//           />
//           <button className='btn btn-success' type='submit' onClick={handleSubmit}>
//             {editIndex !== null ? 'Edit' : 'Add'}
//           </button>
//         </div>
//         {todo.map((e, i) => (
//           <ul className='row' key={i}>
//             <h6>
//               {e}
//               <button className='btn btn-sm btn-danger' onClick={() => handleDelete(i)}>
//                 <i className="fa-solid fa-trash"></i>
//               </button>
//               <button className='btn btn-success btn-sm' onClick={() => handleEdit(i)}>
//                 <i className="fa-solid fa-pen-to-square"></i>
//               </button>
//             </h6>
//             <hr />
//           </ul>
//         ))}
//       </div>
//     </>
//   );
// }

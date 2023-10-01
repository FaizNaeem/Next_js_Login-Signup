'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.css'
// import React from 'react'
import React, { useEffect, useState } from 'react';
// import './todolist.css';
// import './Todo.css';
// import Swal from 'sweetalert2';

const getDataFromLocalStorage = () => {
  const storedData = localStorage.getItem("list");
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    return [];
  }
}

export default function Faiz() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState(getDataFromLocalStorage()); // Use the function to get data
  const [btn, setBtn] = useState(true);
  const [select, setSelect] = useState(null);

  console.log(item);

  const Submit = () => {
    if (!input) {
      Swal.fire({
        icon: 'error',
        title: 'Please Fill This Input',
      });
    } else if (input && select) {
      setItem(item.map((el) => {
        if (el.id === select) {
          return { ...el, name: input };
        }
        return el;
      }));
      setBtn(true);
      setInput("");
      setSelect(null);
    } else {
      const obj = { id: new Date().getTime().toString(), name: input };
      setItem([...item, obj]);
      setInput("");
    }
  }

  const Del = (e) => {
    const save = item.filter((ele) => e !== ele.id);
    setItem(save);
  }

  const Edit = (e) => {
    const store = item.find((ele) => e === ele.id);
    setBtn(false);
    setInput(store.name);
    setSelect(e);
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(item));
  }, [item]);

  return (
    <>
      <h1 className=''>Todo List 📝</h1>
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
          {btn ? (
            <button className='btn btn-success' type='submit' onClick={Submit}>Add</button>
          ) : (
            <button className='btn btn-success' type='submit' onClick={Submit}>Edit</button>
          )}
        </div>
        {item.map((element) => (
          <ul className='row' key={element.id}>
            <h6 className=''>
              {element.name}
              <button className='btn btn-sm hi btn-danger' onClick={() => Del(element.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
              <button className='btn btn-success btn-sm ' onClick={() => Edit(element.id)}>
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

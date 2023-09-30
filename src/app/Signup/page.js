
'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import signUp from '@/confiq/Signup';
import Link from 'next/link';
import addData from '@/confiq/Firestore';
import { useRouter } from "next/navigation"
import { useState } from "react"
export default  function siignup() {
  const [email, setEmail] = useState('')
  const router = useRouter()
  const [password, setPassword] = useState('')
  const signup = async()=>{

    const { result, error } = await signUp(email, password)
              console.log('result, error->', result, error)
              if (result) {
              // alert("Signup Success")
              const data = {
                name: 'John snow',
                house: 'Stark'
              }
              const { result, error } = await addData('users', 'user-id', data)
          
              if (error) {
                return console.log(error)
              }
              } else {
                  alert(error.message)
              }
  }
  return (
    <div style={{display:"flex",flexDirection:'column' ,alignItems:"center", 
    justifyContent:"center",border:"1px solid black" ,height:"100vh"}}>

 <div className='p-5' style={{boxShadow:"2px 2px 10px black"}}>
<h1>Signup</h1>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" style={{width:"300px"}} aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="password" onChange={(e) => setPassword(e.target.value)} style={{width:"300px"}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Already Have An Account <Link href={'/Login'}>Login</Link></div>
  </div>
  <button type="submit" class="btn btn-primary" onClick={signup}>SignUp</button>

 </div>
    </div>
  )
}

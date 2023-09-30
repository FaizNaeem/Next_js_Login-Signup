'use client'
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useRouter } from "next/navigation"
import signIn from '@/confiq/Signin';
// import { useState } from "react"
export default function Login() {
    const [email, setEmail] = useState('')
    const router = useRouter()
    const [password, setPassword] = useState('')
    const login =async ()=>{
        const { result, error } = await signIn(email, password)
        console.log('result, error->', result, error?.message)
        if (result) {
            router.replace('/')
        }
        else {
            alert(error.message)
        }
    }
  return (
        <div style={{display:"flex",flexDirection:'column' ,alignItems:"center", 
    justifyContent:"center",border:"1px solid black" ,height:"100vh"}}>

 <div className='p-5' style={{boxShadow:"2px 2px 10px black"}}>
<h1>Login</h1>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email"  onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:"300px"}}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e) => setPassword(e.target.value)} style={{width:"300px"}}/>
    <div id="emailHelp" class="form-text">Create An Account? <Link href={'/Signup'}>SignUp</Link></div>
  </div>
  <button type="submit" class="btn btn-primary" onClick={login}>Login</button>

 </div>
    </div>
    
  )
}

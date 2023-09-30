'use client'
import signout from '@/confiq/Signout';
import { AuthContext } from '../context/AuthProvider/index'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {

    const { user } = useContext(AuthContext)
    const router = useRouter()

    const handleOnClickLoginBtn = () => {
        if (!user) {
            router.push('/Login')
        } else {
            signout()
        }
    }
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
  
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleOnClickLoginBtn}>{user?user.email :'Login'}</button>
  </div>
</nav>
    </div>
  )
}
export default Navbar
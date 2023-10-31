import React from 'react';
import style from "../Style/Navbar.module.css";
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.clear()
    navigate("/login")
  }
  const token=localStorage.getItem("token")
  
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src="https://www.rnwmultimedia.edu.in/assets/img/photos/rnw-logo.png" alt="Logo" />
      </div>
      <div className={style.items}>
        <ul>
          <li><a href="/create">Write a Blog</a></li>
          <li><a href='/notes' >All Blogs</a></li>
          <li><a href="/register">Register</a></li>
          {token?<li onClick={handleLogout}><a >Logout</a></li>:
          <li><a href="/login">Login</a></li>
          }
        </ul>
      </div>
    </div>
  )
}

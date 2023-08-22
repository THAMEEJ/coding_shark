import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
import { HashLink } from 'react-router-hash-link'



const Navbars = () => {
  return (
    <nav className='nav'>
        <div className="logo">
          <HashLink to="/#Home">CODING SHARK</HashLink>
        </div>
        <div className="nav-links" >
            <li><NavLink  to="/">HOME</NavLink></li>
            <li><HashLink  to="/#about">ABOUT</HashLink ></li>
            <li><HashLink  to="/#Brand">Brand</HashLink ></li>
            <li><NavLink  to="/contact">CONTACT</NavLink></li>
            <li><NavLink  to="/services">SERVICES</NavLink></li>
            
        </div>
    </nav>
  )
}
export default Navbars

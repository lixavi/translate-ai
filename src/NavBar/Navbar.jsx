import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav class="navbar  navbar-expand-lg" style={{background:'var(--navbar)'}}>
    <div class="container " style={{padding:'0.5rem'}} >
    <Link class="navbar-brand fw-bold"  to="/"  style={{color:'white'}}>
                {/* <img src="Images/logo.png" alt='' height="50"/> */}
                AUCIS
            </Link>

      <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" ></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            
          <Link className='nav-link' style={{color:'white'}}  to="/" role="button">Home</Link>
          </li>
          <li class="nav-item">
          <Link className='nav-link' style={{color:'white'}}  to="/about" role="button">About</Link>
          </li>
          <li class="nav-item">
          <Link className='nav-link' style={{color:'white'}} to="/services" role="button">Services</Link>
          </li>
          <li class="nav-item">
          <Link className='nav-link' style={{color:'white'}} to="/events" role="button">Events</Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" style={{color:'white'}} href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pages +
            </a>
            <ul class="dropdown-menu">
              <li><Link className='nav-link'  to="/teams" role="button">Our Team</Link></li>
              <li> <Link className='nav-link'  to="/gallery" role="button">Gellery</Link></li>
            </ul>
          </li>
          <li class="nav-item">
          <Link className='nav-link' style={{color:'white'}} to="/contact" role="button">Contact</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <h1 className="navbar-heading">Employee Register</h1>
        <div className="links">
            <Link to="/" className="link">Home</Link>
            <Link to="/create" className="link">New Employee</Link>
        </div>
    </nav>
)}
export default Navbar

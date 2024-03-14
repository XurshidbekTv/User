import './navbar.css'
import React from 'react'

const Navbar = ({usersLenght}) => {
  return (
    <div className='navbar'>
        <div className="navbar-container container">
            <h1 className='navbar-logo'>User</h1>
            <h3 className="navbar-counter">
                {usersLenght>0 ? "You have:" +usersLenght : "No Users :("}
            </h3>
        </div>
    </div>
  )
}

export default Navbar
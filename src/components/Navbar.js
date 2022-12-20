import React from 'react';
import '../Styles/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h3>WallisSell</h3>
        <div className="navbarList">
            <p> <a href='#'> Login/SignUp </a></p>
            <p> <a href='#'> Prodcuts </a></p>
            <p> <a href="#"> Cart </a></p>
        </div>
    </div>
  )
}

export default Navbar

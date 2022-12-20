import React from 'react';
import '../Styles/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h3>WallisSell</h3>
        <div className="navbarList">
            <ul>
                <li> Login/SignUp </li>
                <li> Prodcuts </li>
                <li> Cart </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

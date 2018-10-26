import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
        <header>
            <div>Logo</div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/cool-couches">Couches</Link>
            </div>
            <div>
                <Link to="/profile">Profile</Link>
            </div>
        </header>
  )
}
export default NavBar

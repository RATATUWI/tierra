import React from 'react'
import { Link } from 'react-scroll'
import logo from '../../assets/logo.jpg'
import './navbar.css'
import Headroom from 'react-headroom'

const Navbar = () => {
  return (
    <Headroom>
      <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>

        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Accommodations</Link>
            <Link className="desktopMenuListItem">Experiences</Link>
        </div>
        <button className='desktopMenuBtn'>Contact</button>
    </nav>
    </Headroom>
  )
}

export default Navbar
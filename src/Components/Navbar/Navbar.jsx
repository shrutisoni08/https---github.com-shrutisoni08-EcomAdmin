// import React from 'react'
import './navbar.css'
import navProfile from '../../assets/ProfileLogo.png'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <h1 className='nav-logo'>Fashion_Plaza</h1>
        <img className='nav-profile' src={navProfile} alt="profile" />
    </div>
    </>
  )
}

export default Navbar
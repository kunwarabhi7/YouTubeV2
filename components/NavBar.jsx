import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsYoutube} from 'react-icons/bs'

const NavBar = () => {
  return (
    <div className='flex '>
        <div className='flex'>
<GiHamburgerMenu />
<BsYoutube />
<h1>YouTube <sup>IN</sup></h1>
        </div>

    </div>
  )
}

export default NavBar

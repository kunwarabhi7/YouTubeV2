import Image from 'next/image'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiVideoPlus} from 'react-icons/bi'
import {BsYoutube,BsSearch,BsMic , BsFillBellFill} from 'react-icons/bs'

const NavBar = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex'>
<GiHamburgerMenu />
<BsYoutube />
<h1>YouTube <sup>IN</sup></h1>
        </div>
        <div className='flex'>

        <input type="text" className='border border-gray-500 rounded-full' />
        <BsSearch />
        <BsMic />
        </div>
        <div className='flex'>
            <BiVideoPlus />
            <BsFillBellFill />
            <Image src='https://images.unsplash.com/photo-1504203772830-87fba72385ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' width='40' height='40' />
        </div>


    </div>
  )
}

export default NavBar

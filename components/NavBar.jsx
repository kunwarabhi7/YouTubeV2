import {GiHamburgerMenu} from 'react-icons/gi'
import {BiVideoPlus} from 'react-icons/bi'
import {BsYoutube,BsMic , BsFillBellFill} from 'react-icons/bs'
import SearchBar from './SearchBar';
import Link from 'next/link';


const NavBar = () => {


  return (
    <div className='flex fixed -top-1 left-0 right-0 bg-black md:justify-between mb-4 ml-4 md:ml-0'>
      {/* First  */}
        <div className='flex'>
<GiHamburgerMenu className='text-white md:mr-6 mr-1   cursor-pointer' size={35}/>
<Link href='/'>
<BsYoutube size={30} id='logo' className='text-black    cursor-pointer'/>
</Link>

<Link href='/'>
<h1 className='font-bold flex md:text-3xl text-sm mt-2  text-white'>YouTube <sup className='text-gray-500 text-xs'>IN</sup></h1>
</Link>
        </div>
        {/* middle div   */}
        <div className='flex '>
<div className='flex bg-black  rounded-full rounded-r-none'>

        <SearchBar />
</div>
      
        <BsMic size={25} className='mt-4 hidden md:block -ml-2 text-white' />
        </div>
        {/* Last Div */}
        <div className='md:flex hidden'>
            <BiVideoPlus size={25} className='text-white mt-2'/>
            <BsFillBellFill size={25} className='text-white mt-2'/>
            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="avatar" />
        </div>


    </div>
  )
}

export default NavBar

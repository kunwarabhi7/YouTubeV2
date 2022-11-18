import Image from 'next/image'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiVideoPlus} from 'react-icons/bi'
import {BsYoutube,BsMic , BsFillBellFill} from 'react-icons/bs'
import SearchBar from './SearchBar';


const NavBar = () => {


  return (
    <div className='flex bg-black justify-between mb-4'>
      {/* First  */}
        <div className='flex'>
<GiHamburgerMenu className='text-white mr-6' size={35}/>
<BsYoutube size={35} className='text-red-600 '/>
<h1 className='font-bold text-3xl text-white'>YouTube <sup className='text-gray-500 text-sm'>IN</sup></h1>
        </div>
        {/* middle div   */}
        <div className='flex'>
<div className='flex bg-black  rounded-full rounded-r-none'>

        <SearchBar />
</div>
      
        <BsMic size={25} className='mt-4 -ml-2 text-white' />
        </div>
        {/* Last Div */}
        <div className='flex'>
            <BiVideoPlus size={25} className='text-white mt-2'/>
            <BsFillBellFill size={25} className='text-white mt-2'/>
            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="avatar" />
        </div>


    </div>
  )
}

export default NavBar

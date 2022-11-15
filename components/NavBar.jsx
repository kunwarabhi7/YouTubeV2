import Image from 'next/image'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiVideoPlus} from 'react-icons/bi'
import {BsYoutube,BsSearch,BsMic , BsFillBellFill} from 'react-icons/bs'

const NavBar = () => {
  return (
    <div className='flex justify-between mb-4'>
      {/* First  */}
        <div className='flex'>
<GiHamburgerMenu className='' size={30}/>
<BsYoutube size={30} className='text-red-500'/>
<h1 className='font-bold text-2xl'>YouTube <sup className='text-gray-500 text-sm'>IN</sup></h1>
        </div>
        {/* middle div   */}
        <div className='flex'>
<div className='flex bg-black rounded-full rounded-r-none'>

        <input type="text" className='border border-gray-500 rounded-full w-[30rem] text-gray-400 h-12 px-4 bg-black' placeholder='Search' />
        <BsSearch className='text-white p-1 mx-4 ' size={30} />
</div>
      
        <BsMic />
        </div>
        {/* Last Div */}
        <div className='flex'>
            <BiVideoPlus />
            <BsFillBellFill />
            <Image src='https://images.unsplash.com/photo-1504203772830-87fba72385ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' width='20' height='20' className='rounded-full'  />
        </div>


    </div>
  )
}

export default NavBar

import Image from 'next/image'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiVideoPlus} from 'react-icons/bi'
import {BsYoutube,BsSearch,BsMic , BsFillBellFill} from 'react-icons/bs'
import { useState } from 'react';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ce4bc40d29msh2e1202fb5cd78c2p135054jsn28cdcf6cdac1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const NavBar = () => {
const [search , setSearch] = useState();

const getResult = () => {
  fetch('https://youtube-v31.p.rapidapi.com/search?q=rajput&part=snippet%2Cid&regionCode=US&maxResults=50&order=date', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

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

        <input type="text" className='border border-gray-500 rounded-full w-[30rem] text-gray-400 rounded-r-none h-8 px-4 bg-black' placeholder='Search' />
        <BsSearch onClick={getResult} className='text-white p-1  border-2 -ml-[2px] border-gray-500 rounded-full rounded-l-none' size={30} />
</div>
      
        <BsMic size={25} className='mt-2 text-white' />
        </div>
        {/* Last Div */}
        <div className='flex'>
            <BiVideoPlus size={25} className='text-white mt-2'/>
            <BsFillBellFill size={25} className='text-white mt-2'/>
            <Image alt='userImage' src='https://images.unsplash.com/photo-1504203772830-87fba72385ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' width='20' height='4' className='rounded-full my-2 '  />
        </div>


    </div>
  )
}

export default NavBar

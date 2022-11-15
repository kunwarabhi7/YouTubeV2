import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {FaYoutube} from 'react-icons/fa'
import {CgYoutube} from 'react-icons/cg'
import {IoLogoYoutube} from 'react-icons/io'
import {BiHistory} from 'react-icons/bi'
import {CiYoutube} from 'react-icons/ci'
import {AiTwotoneLike} from 'react-icons/ai'
import {MdOutlineWatchLater} from 'react-icons/md'
import {SiTypescript,SiJavascript} from 'react-icons/si'
import {FaJava,FaReact} from 'react-icons/fa'


const SideBar = () => {
  return (
    <div className='w-36 h-full'>
        {/* Basic  */}
        <div>

      <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <div className='flex'>
<FaYoutube />
        <h1>Shorts</h1>
        </div>
        <div className='flex'>
<CgYoutube />
        <h1>Subsription</h1>
        </div>
        </div>
        <hr className='text-black text-7xl font-bold bg-black h-1' />
        {/* Second Section  */}
        <div>
        <div className='flex'>
<IoLogoYoutube />
        <h1>Library</h1>
        </div>
        <div className='flex'>
<BiHistory />
        <h1>History</h1>
        </div><div className='flex'>
<CiYoutube />
        <h1>Your videos</h1>
        </div><div className='flex'>
<MdOutlineWatchLater />
        <h1>Watch Later</h1>
        </div>
        <div className='flex'>
<AiTwotoneLike />
        <h1>Liked Video</h1>
        </div>
        </div>
        <hr className='text-black text-7xl font-bold bg-black h-1' />
        {/* Subsription  */}
        <div>
        <h1>Subscriptions</h1>
        <div className='flex'>
<FaJava size={20} className='rounded-full border-red-500 w-6 text-red-500 h-5 border' />
        <h1>Learn Java</h1>
        </div><div className='flex'>
<SiJavascript className='rounded-full border-yellow-500 w-6 text-yellow-500 h-5 border'/>
        <h1>Javasript</h1>
        </div><div className='flex'>
<SiTypescript className='rounded-full border-black w-6 text-black h-5 border'/>
        <h1>TypeScript</h1>
        </div>
        <div className='flex'>
<FaReact className='rounded-full border-blue-500 w-6 text-blue-500 h-5 border'/>
        <h1>ReactJS</h1>
        </div>
        </div>
        <hr className='text-black text-7xl font-bold bg-black h-1' />
        {/* Explore  */}
        <div>
            <h1>Explore</h1>
            <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <hr className='text-black text-7xl font-bold bg-black h-1' />
        </div>
        {/* More From YouTube  */}
        <div>
            <h1>More from YouTube</h1>
            <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div><div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div><div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        </div>
        <hr className='text-black text-7xl  font-bold bg-black h-1' />
        {/* Setting  */}
        <div>
        <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        <div className='flex'>
<AiFillHome />
        <h1>Home</h1>
        </div>
        
        </div>
    {/* About us  */}
<div className='grid grid-cols-3'>
<h1>About</h1>
<h1>About</h1>
<h1>About</h1>
<h1>About</h1>
<h1>About</h1>
<h1>About</h1>
<h1>About</h1>
</div>
<p>@ 2022 Google LLC</p>
    </div>
  )
}

export default SideBar

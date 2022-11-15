import React from 'react'
import {AiFillHome, AiOutlineBulb, AiOutlineTrophy} from 'react-icons/ai'
import {FaYoutube} from 'react-icons/fa'
import {CgYoutube , CgMusicNote, CgLivePhoto} from 'react-icons/cg'
import {IoLogoYoutube} from 'react-icons/io'
import {BiHistory, BiNews} from 'react-icons/bi'
import {CiYoutube} from 'react-icons/ci'
import {AiTwotoneLike} from 'react-icons/ai'
import {MdOutlineWatchLater} from 'react-icons/md'
import {SiTypescript,SiJavascript, SiYoutubegaming, SiYoutubetv, SiYoutubemusic, SiYoutubestudio} from 'react-icons/si'
import {FaJava,FaReact} from 'react-icons/fa'
import {GiBoltDrop, GiHanger, GiHelp} from 'react-icons/gi'
import {IoFilmSharp} from 'react-icons/io5'
import {BsFlag, BsYoutube} from 'react-icons/bs'
import {TiSocialYoutubeCircular} from 'react-icons/ti'
import {RiFeedbackLine} from 'react-icons/ri'

const SideBar = () => {
  return (
    <div className='w-48 h-full'>
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
        <hr className='text-black  bg-black h-1' />
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
<SiTypescript className='rounded-full border-cyan-900 w-6 text-cyan-900 h-5 border'/>
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
<GiBoltDrop />
        <h1>Trending</h1>
        </div>
        <div className='flex'>
<CgMusicNote />
        <h1>Music</h1>
        </div>
        <div className='flex'>
<IoFilmSharp />
        <h1>Films</h1>
        </div>
        <div className='flex'>
<CgLivePhoto />
        <h1>Live</h1>
        </div>
        <div className='flex'>
<SiYoutubegaming />
        <h1>Gaming</h1>
        </div>
        <div className='flex'>
<BiNews />
        <h1>News</h1>
        </div>
        <div className='flex'>
<AiOutlineTrophy />
        <h1>Sport</h1>
        </div>
        <div className='flex'>
<AiOutlineBulb />
        <h1>Learning</h1>
        </div>
        <div className='flex'>
<GiHanger />
        <h1>Fashion & beauty</h1>
        </div>
        <hr className='text-black text-7xl font-bold bg-black h-1' />
        </div>
        
        {/* More From YouTube  */}
        <div>
            <h1>More from YouTube</h1>
            <div className='flex'>
<BsYoutube />
        <h1>YouTube Premium</h1>
        </div><div className='flex'>
<SiYoutubestudio />
        <h1>Creator Studio</h1>
        </div><div className='flex'>
<SiYoutubemusic />
        <h1>YouTube Music</h1>
        </div>
        <div className='flex'>
<TiSocialYoutubeCircular />
        <h1>YouTube Kids</h1>
        </div>
        <div className='flex'>
<SiYoutubetv />
        <h1>YouTube TV</h1>
        </div>
        </div>
        <hr className='text-black text-7xl  font-bold bg-black h-1' />
        {/* Setting  */}
        <div>
        <div className='flex'>
<SiYoutubestudio />
        <h1>Setting</h1>
        </div>
        <div className='flex'>
<BsFlag />
        <h1>Report history</h1>
        </div>
        <div className='flex'>
<GiHelp />
        <h1>Help</h1>
        </div>
        <div className='flex'>
<RiFeedbackLine />
        <h1>Send feedback</h1>
        </div>
        
        </div>
    {/* About us  */}
<div className='grid grid-cols-3'>
<h1>About</h1>
<h1>Press</h1>
<h1>Copyright</h1>
<h1>Contact</h1>
<h1>Creator</h1>
<h1>Advertise</h1>
<h1>Developer</h1>
</div>
<p>@ 2022 Google LLC</p>
    </div>
  )
}

export default SideBar

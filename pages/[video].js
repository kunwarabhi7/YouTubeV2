import React from 'react'
import ReactPlayer from 'react-player'
import { useRouter } from 'next/router'
import Link from 'next/link'
const video = () => {
    const router = useRouter()
    const {video} = router.query

  return (
    <div className='bg-black flex flex-col  mt-24   md:ml-[40%] text-white w-full h-[640px]'>
      <Link href='/'>
      <h1 className='text-red-500 text-4xl ml-24 mt-8 md:mt-0 mb-8'>Abhi <span className='text-white'>Shek</span></h1>
      </Link>

            <ReactPlayer width='500px' height='320px'  url={`https://www.youtube.com/watch?v=${video}`}  controls />
    </div>
  )
}

export default video


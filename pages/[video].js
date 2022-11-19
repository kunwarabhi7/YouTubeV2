import React from 'react'
import ReactPlayer from 'react-player'
import { useRouter } from 'next/router'
const video = () => {
    const router = useRouter()
    const {video} = router.query

  return (
    <div className='bg-black flex flex-col  md:mt-24  md:ml-[40%] text-white w-full h-[640px]'>
      <h1 className='text-red-500 text-4xl ml-24 mb-8'>Abhi <span className='text-white'>Shek</span></h1>

            <ReactPlayer width='480px' height='320px'  url={`https://www.youtube.com/watch?v=${video}`}  controls />
    </div>
  )
}

export default video


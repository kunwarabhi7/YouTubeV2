import React from 'react'

const Card = (props) => {
    const {image,title,channel,time } = props;
    const date = new Date(time).toLocaleString() 
  return (
    <div className="flex-1 md:mr-1 mr-6 ">
        <div>
            <img src={image} alt="" className=' w-96 md:w-80 h-60' />
        </div>
    <div className='flex -mt-3 '>
        <div>
        <img src={image} className='w-8 h-6 rounded-full' alt="image" />
        </div>

    <div className="mb-4">
        <h4 className="text-sm text-white font-medium">{title}</h4>
        <p className="mt-2 font-hairline text-sm text-gray-500">
            {channel}
            <span className="w-4 h-4 text-white inline-block text-center  bg-gray-400 rounded-full border-gray-400   ">&#10003;</span>
        </p>
        <p className="mt-1 font-hairline text-xs text-gray-400">
            25,000 views &middot; {date}
        </p>
        
    </div>
    </div>
</div>
  )
}

export default Card

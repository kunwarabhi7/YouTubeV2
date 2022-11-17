import React from 'react'

const Card = (props) => {
    const {image,title,channel,time } = props;
    const date = new Date(time).toLocaleString() 
  return (
    <div className="flex-1 mr-1">
    <div>
        <img src={image} className='w-72' alt="image" />
    </div>
    <div className='flex '>
        <div>
        <img src={image} className='w-8 h-6 rounded-full' alt="image" />
        </div>

    <div className="mb-4">
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="mt-2 font-hairline text-sm text-grey-darker">
            {channel}
            <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">&#10003;</span>
        </p>
        <p className="mt-1 font-hairline text-xs text-grey-darker">
            25,000 views &middot; {date}
        </p>
        
    </div>
    </div>
</div>
  )
}

export default Card

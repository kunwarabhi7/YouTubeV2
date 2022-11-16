import React from 'react'

const Card = () => {
  return (
    <div className="flex-1 mr-1">
    <div>
        <img src="https://i.ytimg.com/vi/BMUiFMZr7vk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCBiAHMlgjlC5lAn12CO1GRPKYgPg" className='w-72' alt="image" />
    </div>
    <div className='flex '>
        <div>
        <img src="https://i.ytimg.com/vi/BMUiFMZr7vk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCBiAHMlgjlC5lAn12CO1GRPKYgPg" className='w-8 h-6 rounded-full' alt="image" />
        </div>

    <div className="mb-4">
        <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming</h4>
        <p className="mt-2 font-hairline text-sm text-grey-darker">
            Fun Fun Function
            <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">&#10003;</span>
        </p>
        <p className="mt-1 font-hairline text-xs text-grey-darker">
            336K views &middot; 2 years ago
        </p>
        
    </div>
    </div>
</div>
  )
}

export default Card

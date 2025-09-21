import React from 'react'

export function Hero(props) {
    

    return (
        <>
            <nav class=" top-0 left-0  w-full z-50 bg-black/30 backdrop-blur-sm border-b border-gray-800 h-20 flex justify-between items-center px-7">
    

<a href="#" class="font-poppins text-2xl font-bold text-white">
    Reel<span class="text-red-600">ix.</span>
</a>            <div className='text-white px-5 flex justify-between gap-10 cursor-pointer'>
                <div>Home</div>
                <div>Movies</div>
                <div>TV Shows</div>
                <div>People</div>
            </div>
            </nav>
            <div className='flex flex-col justify-center items-center h-auto font-[Impact] text-6xl py-9'>
            <div  className='text-white text-8xl'>UNLIMITED </div>
            <div className='text-red-600 text-8xl'>CINEMA.</div>
            </div>

            <div className='text-white flex items-center justify-center text-lg'>
                Dive into a universe of films. Instantly search and discover titles from every era.
            </div>
        </>
    )
}

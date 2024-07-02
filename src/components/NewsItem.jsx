import React from 'react';
import Image from '../assets/news.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className='card bg-slate-800 shadow-md shadow-blue-400 hover:shadow-red-500 duration-500 transform-all py-5 px-2 my-3 mx-4 mb-6 inline-block sm:w-[22vw] md:w-[20vw] lg:w-[18vw] xl:w-[22vw]'>
      <img className='w-full h-[25vw] sm:h-[15vw] md:h-[13vw] lg:h-[12vw] xl:h-[10vw] object-cover ' src={src ? src : Image} alt="" />
      <div className="cardbody px-1 flex flex-col gap-3 py-2">
        <div className="title text-center capitalize font-cinzel">{title.slice(0, 50)}</div>
        <p className='text-sm font-grotesk'>{description ? description.slice(0, 90) : `A transcript of the harrowing 2005 call with Cindy Clemishire was reportedly discovered on`}</p>
        <a className='px-3 py-1 bg-gradient-to-t from-teal-700 to-green-500 rounded-full text-center capitalize font-grotesk' href={url}>Know More</a>
      </div>
    </div>
  )
}

export default NewsItem;

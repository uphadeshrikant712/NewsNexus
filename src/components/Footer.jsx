import React from 'react'
import { CiMobile3 } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa'
import { FiLinkedin } from 'react-icons/fi';
import { IoLogoGithub, IoLogoGoogleplus } from 'react-icons/io';

const Footer = () => {
  const socialLinks = [
    
    {
      id: 1,
      icon: <IoLogoGoogleplus size={25} />,
      link: "mailto:uphadeshrikant@gmail.com",
      style:'px-2 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 ',
    },
    {
      id: 2,
      icon: <FaInstagram size={25} />,
      link: "https://www.instagram.com/shrikant__96k",
      style:'px-2 py-2 rounded-full bg-gradient-to-tr from-red-600 to-pink-700 ',
    },
    {
      id: 3,
      icon: <FiLinkedin size={25} />,
      link: "https://www.linkedin.com/in/shrikantuphade",
      style:'px-2 py-2 rounded-full bg-gradient-to-r from-blue-700 to-slate-700 ',
    },
    {
      id: 4,
      icon: <IoLogoGithub size={25} />,
      link: "https://github.com/uphadeshrikant712",
      style:'px-2 py-2 rounded-full bg-gradient-to-r from-gray-800 to-slate-900 ',
          },
    {
      id: 5,
      icon: <CiMobile3 size={25} />,
      link: "tel:+9923631701",
      style:'px-2 py-2 rounded-full bg-gradient-to-r from-cyan-700 to-teal-700 ',
    }
    
  ];
  return (
    <div className='w-full md:h-[22vw] bg-gradient-to-tr from-red-400 to-blue-400 flex flex-col items-center justify-center'>
      <div>
        <img className='md:w-[12vw] md:h-[12vw] h-[42vw] w-[42vw]' src="./memoji-coder-asian-male.png" alt="" /></div>
      <h1 className='heading border-b-[1px] border-slate-500 text-black font-grotesk 
      '>Designed and developed by  <span className='font-cinzel text-white'>Shrikant Uphade.!  </span> </h1>
      <div className="icons py-3">
        <ul className='flex gap-4'>       
          {
            socialLinks.map(({id,icon,link,style}) =>
            (
              <li key={id} className={style}>
                <a href={link} target='_blank' rel='noreferrer noopener' className='text-white'>
                  {icon}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Footer
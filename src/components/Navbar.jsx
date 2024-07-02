import React, { useState } from 'react'
import { CiBaseball } from 'react-icons/ci';
import { DiAtom } from 'react-icons/di';
import { FaBusinessTime, FaHandHoldingHeart } from 'react-icons/fa';
import { SlSocialInstagram } from 'react-icons/sl';
import HamburgerMenu from './HamburgerMenu';

const Navbar = ({ setCategory }) => {
  const links = [
    {
      id: 1,
      link: 'technology',
      onClick: () => setCategory('technology'),
      icon: <DiAtom />

    },
    {
      id: 2,
      link: 'business',
      onClick: () => setCategory('business'),
      icon: <FaBusinessTime />
    },
    {
      id: 3,
      onClick: () => setCategory('health'),
      link: 'health',
      icon: <FaHandHoldingHeart />
    },
    {
      id: 4,
      onClick: () => setCategory('sports'),
      link: 'sports',
      icon: <CiBaseball />
    },
    {
      id: 5,
      onClick: () => setCategory('entertainment'),
      link: 'entertainment',
      icon: <SlSocialInstagram />
    }
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className=' w-full h-20 bg-black text-white flex items-center justify-start px-4'>
      <div className="left flex items-center justify-center px-3">
        <img className='w-[18vw] h-[18vw] md:w-[5vw] md:h-[5vw] ' src="./fxVE.gif" alt="" />
      </div>
      <div className="hidden right-nav md:flex gap-4 pl-8">
        {
          <ul className='flex gap-4'>
            {links.map(({ id, link, onClick, icon }) => (
              <li key={id} className='group cursor-pointer font-grotesk capitalize hover:text-orange-500 transform transition-all duration-300' onClick={onClick}>
                <h1 className='flex justify-center text-2xl'>
                  {icon}
                </h1>
                {link}
                <span className='absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100'></span>
              </li>
            ))}
          </ul>
        }
      </div>
      <div className="z-10 md:hidden fixed hamburger-menu flex items-center justify-center  right-5">
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div
        className={
          isOpen
            ? "w-full md:hidden h-full fixed left-0 top-0  bg-gray-900/70 backdrop-blur"
            : ""
        }
      >
        {/* ------------------------Mobile Menu Inner Part-------------------------------- */}
        <div
          className={
            isOpen
              ? "w-4/5 h-full bg-gray-900 fixed left-0 top-0 p-10 text-white ease-in duration-500 "
              : "fixed top-0 left-[-100%] h-full p-10 duration-300"
          }
        >
          <div className="heading flex items-center justify-center py-2">
            <h1 className='text-2xl flex text-black font-semibold px-2 bg-gradient-to-r from-pink-600 to-blue-400 font-sriracha'> NewsNexus✨  </h1>
          </div>
          
      <div className="md:hidden right-nav pt-12">
        {
          <ul className='flex flex-col items-center gap-8'>
            {links.map(({ id, link, onClick, icon }) => (
              <li key={id} className='group cursor-pointer font-grotesk capitalize hover:text-orange-500 transform transition-all duration-300' onClick={() => { onClick(); setIsOpen(!isOpen) }}>
                <h1 className='flex justify-center text-2xl'>
                  {icon}
                </h1>
                {link}
                <span className='absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100'></span>
              </li>
            ))}
          </ul>
        }
      </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
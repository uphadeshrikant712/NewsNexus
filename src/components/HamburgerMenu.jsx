import React from 'react'

const HamburgerMenu = ({isOpen,setIsOpen}) => {
  
  return (
    <>
      <div className="main flex items-center justify-center min-h-20">
        <div onClick={() => setIsOpen(!isOpen)} className="innner space-y-2 cursor-pointer ">
          <div className={`w-8 h-0.5 rounded-full bg-gradient-to-tr from-yellow-500 to-red-500  transform transition-all  duration-300 ${isOpen ? 'rotate-45 translate-y-[14px]' : ''} `}></div>
          <div className={`w-8 h-1 rounded-full bg-gradient-to-tr from-yellow-500 to-red-500 transform transition-all  duration-300 ${isOpen ? 'opacity-0' : ''} `}></div>
          <div className={`w-8 h-0.5 rounded-full bg-gradient-to-tr from-yellow-500 to-red-700  transform transition-all  duration-300 ${isOpen ? ' -rotate-45 -translate-y-2 ' : ''}`}></div>
        </div>
      </div>
     

    </>
  )
}

export default HamburgerMenu
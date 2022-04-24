import React from 'react'
import {CgWebsite} from 'react-icons/cg'
import {FiLogIn} from 'react-icons/fi'


export const Header = () => {
  
  const homeLink = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    var b = confirm('You will be taken to the NIAABC main website!')
    if (b) {
      window.location.href = 'https://niaabujachapter.com'
    }
    
  }

  return (
  <div className="w-full h-18 pb-1 bg-black/90 md:bg-black/80 fixed font-Cormorant border-b border-gray-800">
      <div className='flex justify-between py-2 px-4 md:px-8'>
        <div>
          <span onClick={homeLink}>
          <CgWebsite className="text-white mt-4 cursor-pointer text-[24px]" />
          </span>
        </div>
        <div className="flex-col text-center font-Roboto">
          <div className='bg-clip-text text-transparent bg-gradient-to-t from-pink-500 to-red-900 text-2xl font-bold'>PATRON</div>
          <div className='text-white font-normal text-[11px] md:text-xs'>Nigeria Institute of Architects - Abuja Chapter</div>
        </div>
        <div className='flex gap-x-1'>
          <a href={'/'}>
            <button className="text-white font-medium text-sm mt-4 hidden md:block">Sign in  </button>
          </a>
          <FiLogIn  className="text-white mt-4 md:mt-5 cursor-pointer text-[24px] md:text-sm"/>
        </div>
      </div>
    </div>
  )
}

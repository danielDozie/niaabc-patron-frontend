import {CgWebsite} from 'react-icons/cg'
import {HiMenuAlt3} from 'react-icons/hi'
import {Link} from 'react-router-dom'


export const Header = () => {
  return (
  <div className='w-full h-18 pb-1 bg-black/80 fixed font-Cormorant border-b border-gray-800'>
      <div className='flex justify-between py-2 px-4 md:px-8'>
        <div>
          <a href={'https://niaabujachapter.com'}>
          <CgWebsite className="text-white mt-4 cursor-pointer text-[24px]" />
          </a>
        </div>
        <div className="flex-col text-center font-Roboto">
          <div className='bg-clip-text text-transparent bg-gradient-to-t from-pink-500 to-violet-500 text-2xl font-bold'>PATRON<span className="text-white underline underline-offset-2">.</span></div>
          <div className='text-white font-normal text-[11px] md:text-xs'>Nigeria Institute of Architects - Abuja Chapter</div>
        </div>
        <div>
          <a href={'/'}>
            <button className="text-white font-medium text-sm mt-4 hidden md:block">Sign in</button>
            <HiMenuAlt3 className="text-white mt-4 cursor-pointer text-[24px] md:hidden" />
          </a>
        </div>
      </div>
    </div>
  )
}

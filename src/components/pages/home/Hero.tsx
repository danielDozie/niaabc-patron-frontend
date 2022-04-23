import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import Logo from './../../common/Logo.svg'

export const Hero = () => {
  return (
    <div className="w-full mx-auto h-full pb-16 pt-20"> 
    <div className="px-8">
        <div className="mx-auto font-Roboto text-center mt-20">
          <img src={Logo} className='h-24 mx-auto' alt='logo' />
          <div>
          <h1 className="text-white bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-7xl  md:text-9xl">NIAABC PATRON</h1>
          </div>
          <div className="flex text-center justify-center font-light text-md text-white gap-x-4 py-8">
            <span>Verifiable </span>
            <IoMdCheckmarkCircleOutline className="text-pink-500 mt-1" size={16}/>
            <span>Accountable</span>
            <IoMdCheckmarkCircleOutline className="text-pink-500 mt-1" size={16}/>
            <span>Nigerian</span>
          </div>
          <div className="py-8">
            <button className="bg-white text-black font-bold py-2 px-8 rounded-full text-sm">Get Started</button>
          </div>
        </div>
      </div>
  </div>
  )
}

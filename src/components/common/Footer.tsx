import React from 'react'

export const Footer = () => {
  return (
    <div className='w-full h-52'>
      <div className="flex px-8 md:px-16 py-16 justify-between">
         <div>
           <h1 className="font-medium uppercase font-Roboto text-2xl text-white">Patron<span className="text-pink-500 underline underline-offset-4">.</span></h1>
         </div>
         <div>
         <div className="flex flex-col gap-y-2">
            <h1 className="font-medium uppercase font-Roboto text-xs text-white">Quick Links</h1>
            <a href="https://dashboard.niaabujachapter.com/clients/index.php?route=register" className="font-light capitalize font-Roboto text-[12px] text-white">Register</a>
            <a href="" className="font-light capitalize font-Roboto text-[12px] text-white">Reach us</a>
            <a href="https://www.niaabujachapter.com/" className="font-light capitalize font-Roboto text-[12px] text-white">About NIAABC</a>
         </div>
         </div>
      </div>
      
      <div className="flex py-4 justify-center border-t border-gray-500">
      <p className="font-light capitalize font-Roboto text-xs text-white">Copyright &copy; 2022. Nigeria Institute of Architects - Abuja Chapter</p>
      </div>
    </div>
  )
}

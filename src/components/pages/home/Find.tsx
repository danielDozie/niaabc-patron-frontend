import React from 'react'

export const Find = () => {
  return (
    <div className="w-full mx-auto mt-16 h-[400px] bg-[url('https://static01.nyt.com/images/2019/10/02/video/02-still-for-america-room-loop/02-still-for-america-room-loop-jumbo.jpg?quality=75&auto=webp')] ">
        <div className="bg-black/80 w-full h-[400px]">
            <div className="px-8 md:px-16">
                <div className="flex flex-col md:flex-row mt-4 gap-x-8">
                    <div className="w-full">
                        <div className="mt-40 text-center align-middle">
                            <div>
                                <button className="w-full md:w-auto md:ml-auto mt-4 md:mt-0 bg-pink-500 bg-gradient-to-r from-pink-500 to-violet-500  text-white font-bold py-2 px-4 rounded-full || hover:bg-gradient-to-l hover:from-pink-500 hover:to-violet-500 ">Find Architects</button>
                                <p className="text-sm font-normal text-gray-300 pt-4">Find architects within the fits of <b>NIAABC</b> using either just phone number or architects DMN</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
  )
}
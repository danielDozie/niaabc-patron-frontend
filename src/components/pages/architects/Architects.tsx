import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { MemberCard } from './MemberCard'

export const Architects = () => {
  return (
    <div className="pb-16 pt-20 bg-black">
      {/* <div className="w-ful h-12 bg-gray-900 static text-sm">
            <div className="flex justify-center mx-auto gap-x-4">
                <input type="text" className="w-[40%]  mt-2 border border-gray-200 p-2 capitalize text-xs font- bg-transparent rounded-sm text-white " placeholder="Search architects using either fullname, phone number or architect&apos;s DMN"/>
                <button className="text-gray-100 font-medium py-2 px-4 text-sm mt-2 hover:text-pink-700">Search</button>
            </div>
        </div> */}
      <div className="flex px-8 gap-x-8 pb-12 bg-black">
        <div className="h-full w-1/4 px-4 justify-start mx-auto text-center hidden md:block relative">
          <div className="fixed mt-4 w-1/4 text-left">
            <h1 className="text-sm text-white uppercase font-bold">Find Architects</h1>
            <p className="text-sm py-2 text-white font-light">Search architects using either fullname, phone number or architect&apos;s DMN.</p>
            <input type="text" className="w-4/5 mt-4 border border-gray-200 p-2 capitalize text-xs font- bg-transparent rounded-sm text-white " placeholder="Enter search keyword" />
            <div className="pt-2">
              <div className="flex text-center justify-center gap-x-1 bg-gradient-to-r from-pink-500 to-red-900 text-gray-100 py-2 text-sm font-semibold mt-2 rounded-sm w-1/2 cursor-pointer || hover:bg-gradient-to-l hover:from-pink-900 hover:to-red-900"><p className="mt-1">Search</p> <BiSearchAlt size="25" className="pt-1" /> 
              </div>
            </div>
            
            <div className="mt-12">
              <h1 className="text-sm text-white uppercase font-bold mb-2">News & Updates</h1>
              <div className="flex flex-col">
                <div className="flex h-20 w-5/6 ">
                   <div className="w-[30%] pt-2">
                    <img src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d" className="w-14 h-14 rounded-sm mr-2" />
                   </div>
                   <div className=" w-full">
                      <h1 className="text-[10px] p-1 text-white font-bold">
                      The new NIAABC has been approved by the Ministry of Education
                      </h1>
                      <p className="text-[10px] p-1 -mt-2 text-slate-300 font-light">
                      The new NIAABC has been approved by the Ministry of Education coming home to the town.
                      </p>
                   </div>
                </div>
                <div className="flex h-20 w-5/6 pt-4">
                   <div className="w-[30%] pt-2">
                    <img src="https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_4x3.jpg" className="w-14 h-14 rounded-sm mr-2" />
                   </div>
                   <div className=" w-full">
                      <h1 className="text-[10px] p-1 text-white font-bold">
                      The new NIAABC has been approved by the Ministry of Education
                      </h1>
                      <p className="text-[10px] p-1 -mt-2 text-slate-300 font-light">
                      The new NIAABC has been approved by the Ministry of Education coming home to the town.
                      </p>
                   </div>
                </div>
              
              </div>
            
            </div>
          </div>
        </div>
        <div className="h-full w-3/4 float-right justify-end">
            {/* //grid with 4 rows */}
            <div className="grid md:grid-rows-4 md:grid-flow-col md:grid-cols-4 gap-4 p-2">
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </div>
            <div className="py-8 mx-auto justify-center text-center w-48">
                  <button className="bg-gray-900 text-gray-100  font-medium py-2 px-4 text-sm mt-2 bg-gradient-to-r from-pink-900 to-red-900 rounded-sm || hover:bg-gradient-to-l hover:from-pink-900 hover:to-red-900">Load More</button>
                </div>
        </div>
      </div>
    </div>
  )
}

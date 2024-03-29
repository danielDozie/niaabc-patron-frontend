import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { MemberCard } from './MemberCard'
import { useQuery } from 'react-query'
import axios from 'axios'
import _ from 'lodash'


export const Architects = () => {
  let init = 0
  let end = 44
  const { isLoading, data } = useQuery('users', () => {
    return axios.get(import.meta.env.VITE_USER_API).then(response => response.data)
  })
  if (isLoading) return <div>Loading...</div>
  const countMembers = _.size(data)
  const sortedMembers = _.sortBy(data, ['dmn'])
  let members = _.slice(sortedMembers, init, end)
  

  const loadMore = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    end += 44
    let newData = _.slice(data, init, end)
    members = newData
    console.log(members)
  }

  

  return (
    <div className="pb-16 pt-20 || dark:bg-black">
      {/* <div className="w-full h-12 bg-gray-900 static text-sm">
            <div className="flex justify-center mx-auto gap-x-4">
                <input type="text" className="w-[40%]  mt-2 border border-gray-200 p-2 capitalize text-xs font- bg-transparent rounded-sm text-white " placeholder="Search architects using either fullname, phone number or architect&apos;s DMN"/>
                <button className="text-gray-100 font-medium py-2 px-4 text-sm mt-2 hover:text-pink-700">Search</button>
            </div>
        </div> */}
      <div className="flex px-8 gap-x-8 pb-12 bg-white || dark:bg-black">
        <div className="h-full w-1/4 px-4 justify-start mx-auto text-center hidden md:block relative">
          <div className="fixed mt-4 w-1/4 text-left">
            <h1 className="text-sm text-black uppercase font-bold || dark:text-white">Find Architects</h1>
            <p className="w-4/5 text-xs py-2 text-black font-light || dark:text-white">Search architects using either full name, phone number or architect&apos;s DMN.</p>
            <input type="text" className="w-4/5 mt-4 border border-gray-200 p-2 capitalize text-xs font- bg-transparent rounded-sm text-black || dark:text-white" placeholder={`Enter search term (Members Count: ${countMembers})`} />
            <div className="pt-2">
              <button className="flex text-center justify-center gap-x-1 bg-gradient-to-r from-pink-500 to-red-900 text-gray-100 py-1 text-sm font-normal mt-2 rounded-sm w-1/2 cursor-pointer || hover:bg-gradient-to-l hover:from-pink-900 hover:to-red-900"><p className="mt-1">SEARCH</p> <BiSearchAlt size="25" className="pt-1" />
              </button>
            </div>

            <div className="mt-12">
              <h1 className="text-sm text-black uppercase font-bold mb-2 || dark:text-white">News & Events</h1>
              <div className="flex flex-col overflow-auto h-72">
                {News.map((article, index) =>
                  <div className="flex h-20 w-5/6 my-2 cursor-pointer" key={index}>
                    <div className="w-[30%] pt-2">
                      <img src={article.image} className="w-14 h-14 rounded-sm mr-2" />
                    </div>
                    <div className=" w-full">
                      <h1 className="text-[10px] p-1 text-black font-bold || dark:text-white">
                        {article.title}
                      </h1>
                      <p className="text-[10px] p-1 -mt-2 text-slate-900 font-light || dark:text-slate-300">
                        {article.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full md:w-3/4 md:float-right md:justify-end">
          {/* //grid with 4 rows */}
          <div className="grid overflow-hidden grid-cols-2 auto-rows-max md:grid-cols-4 gap-4 mx-auto">
            <MemberCard members={members} />
          </div>
          <div className="py-8 mx-auto justify-center text-center w-48" onClick={loadMore}>
            <button className="bg-gray-900 text-gray-100  font-normal py-2 px-4 text-sm mt-2 bg-gradient-to-r from-pink-900 to-red-900 rounded-sm || hover:bg-gradient-to-l hover:from-pink-900 hover:to-red-900">Load more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const News = [
  {
    title: 'The new NIAABC has been approved by the Ministry of Education',
    content: 'The new NIAABC has been approved by the Ministry of Education coming home to the town.',
    image: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  },
  {
    title: 'The new NIAABC has been approved by the Ministry of Education',
    content: 'The new NIAABC has been approved by the Ministry of Education coming home to the town.',
    image: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  },
  {
    title: 'The new NIAABC has been approved by the Ministry of Education',
    content: 'The new NIAABC has been approved by the Ministry of Education coming home to the town.',
    image: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  },
  {
    title: 'The new NIAABC has been approved by the Ministry of Education',
    content: 'The new NIAABC has been approved by the Ministry of Education coming home to the town.',
    image: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  },
  {
    title: 'The new NIAABC has been approved by the Ministry of Education',
    content: 'The new NIAABC has been approved by the Ministry of Education coming home to the town.',
    image: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  },
  {
    title: 'The new NIAABC has been approved by the Ministry of Education',
    content: 'The new NIAABC has been approved by the Ministry of Education coming home to the town.',
    image: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  }
]
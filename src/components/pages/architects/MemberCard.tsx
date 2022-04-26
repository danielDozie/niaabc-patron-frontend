import React from 'react'

export const MemberCard = () => {
  return (
    <div className="w-[300px] h-[200px] md:h-[200px] md:w-[200px] rounded-md bg-gradient-to-tl from-gray-900 to-slate-900 shadow-lg">
                    <img src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d" className="w-20 h-20 rounded-full mt-4 mx-auto" />
                    <div className="px-4 text-slate-400 mt-4 text-center md:text-left ">
                        <p className="text-xs">
                            Name: Ninah Nimi Briggs
                        </p>
                        <p className="text-xs">
                            Cadre: Associate Member
                        </p>
                        <p className="text-xs">
                            DMN: 23******
                        </p>
                        <p className="text-xs">
                            Status: Financial
                        </p>
                      </div>
                </div>
  )
}

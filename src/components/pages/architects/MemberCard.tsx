import React from 'react'

export const MemberCard = () => {
  return (
    <div className="w-[170px] h-[230px] md:h-[200px] md:w-[200px] rounded-md  mx-auto shadow-sm bg-gradient-to-tl from-white to-slate-50 || dark:bg-gradient-to-tl dark:from-gray-900 dark:to-slate-900">
                    <img src="../assets/image/profile-img.jpeg" className="w-20 h-20 rounded-full mt-4 mx-auto" />
                    <div className="px-4 text-slate-600 mt-4 text-center md:text-left font-light || dark:text-slate-400">
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

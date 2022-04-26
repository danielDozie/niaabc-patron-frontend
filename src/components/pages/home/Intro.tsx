import recognised from './recognised.svg'
import { useQuery } from 'react-query'
import axios from 'axios'

export const Intro = () => {
    // const { isLoading, error, data } = useQuery('users', () => {
    //     return axios.get(import.meta.env.VITE_USER_API).then(response => response.data)
    // })
    // if (isLoading) return <div>Loading...</div>
    // if (error) return <div>Error: </div>
    // if (!data) return <div>No data</div>
    // console.log(data)
    return (
        <div className="w-full mx-auto mt-16 h-full pb-16">
            <div className="px-8 md:px-16">

                <div className="flex flex-col md:flex-row mt-4 gap-x-8">
                    <div className="w-full md:w-3/5">
                        <div className="my-4">
                            <div>
                                <h1 className="text-white font-bold text-3xl md:text-3xl uppercase">Be Recognised<span className="text-pink-500">.</span></h1>
                            </div>
                            <p className="text-gray-300 font-light text-sm md:text-md">
                                We remain true to the same principles on which Nigerian Institute of Architects (N.I.A) was founded since 1960: producing members that create superior designs, shaping our world, putting safety first & creating vast opportunities. In this way, we want you to be recognised for the quality of your works, social heirarchy and great contributions you've made and attributes to which the institution was founded.
                            </p>
                        </div>
                        <div className="my-12">
                            <div>
                                <h1 className="text-white font-bold text-3xl md:text-3xl uppercase">Be Verified<span className="text-pink-500">.</span></h1>
                            </div>
                            <p className="text-gray-300 font-light text-sm md:text-md">
                                We remain true to the same principles on which Nigerian Institute of Architects (N.I.A) was founded since 1960: producing members that create superior designs, shaping our world, putting safety first & creating vast opportunities. In this way, we want you to be recognised for the quality of your works, social heirarchy and great contributions you've made and attributes to which the institution was founded.
                            </p>
                        </div>
                        <div className="my-4">
                            <div>
                                <h1 className="text-white font-bold text-3xl md:text-3xl uppercase">Be Accountable<span className="text-pink-500">.</span></h1>
                            </div>
                            <p className="text-gray-300 font-light text-sm md:text-md">
                                We remain true to the same principles on which Nigerian Institute of Architects (N.I.A) was founded since 1960: producing members that create superior designs, shaping our world, putting safety first & creating vast opportunities. In this way, we want you to be recognised for the quality of your works, social heirarchy and great contributions you've made and attributes to which the institution was founded.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 mt-12 md:mt-0">
                        <img src={recognised} alt="Niaabc" />
                    </div>
                </div>
            </div>
        </div>
    )
}

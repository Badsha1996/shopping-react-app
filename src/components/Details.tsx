import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Idata } from "../types/Idata"
import { MdOutlineStar } from "react-icons/md"

export default function Details() {
    const [details, setDetails] = useState<Idata>()
    const location = useLocation()

    useEffect(() => {
        setDetails(location.state.item)
    }, [])


    return (
        <div>
            <div className="max-w-screen-xl mx-auto my-auto flex gap-10">
                <div className="relative my-2 ml-2">
                    <img src={details?.image} alt="deatil image"
                        className="w-full object-cover" />
                    <div className="absolute top-0 right-0">
                        {details?.isNew && (
                            <>
                                <p className="bg-gradient-to-r
             from-pink-500
             via-red-500
             to-yellow-500
             bg-red-500 text-white 
                             font-semibold
                             py-1 px-8">
                                    Discount
                                </p>
                            </>
                        )}
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center gap-12">
                    <div>
                        <strong className="text-xl md:text-2xl font-semibold">
                            {details?.title}
                        </strong>
                        <div className="flex items-center 
                        gap-4 mt-3">
                            <p className="line-through text-gray-500">
                                &#8377;{details?.oldPrice}</p>
                            <p className="font-semibold">&#8377;{details?.price}</p>

                        </div>
                    </div>
                    <div className="flex items-center  text-base">
                        <div className="flex">
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                        </div>
                        <p className="text-gray-400">(Customer Review)</p>
                    </div>
                    <div>
                        <p>{details?.description}</p>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </div>
    )
}

import { CartLogo, Hero, ShopLogo } from "../assets/images"
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="sticky z-50 top-0 h-20 bg-white border-b-[0.05rem] border-gray-700 ">
            <div className="  h-full mx-auto  flex items-center justify-between">
                <Link to={"/"}>
                    <div className="flex items-center">
                        <img src={ShopLogo} className="w-16 mix-blend-normal" alt="PageLogo" />
                        <span className="text-xl font-bold italic ">ShopNow</span>
                    </div>
                </Link>

                <div className="flex items-center gap-8 ">
                    <Link to={"/cart"}>
                    <div className="relative">
                        <img src={CartLogo} className="w-8 " alt="shoppingCart" />
                        <span className="absolute w-4 h-4 top-0 left-4 text-sm flex 
                        items-center text-white rounded-full bg-red-600 justify-center font-semibold">4</span>
                    </div>
                    </Link>
                    <div>
                        <img className="w-8 rounded-full" src="https://lh3.googleusercontent.com/T14Y9Ms8bvvRg5ivZPjoNDJMZ8TIrkaEuUu6xhKLzabfWkTRqBXmooPTWqsdbmO7_Y288bAPl1bwG_NeAU7Lt5Q3lwibbZz7PnDvGLV2ciG2LQE7=w380-nu-rj-l70-e365" alt="profileLogo" />
                    </div>




                    <ul className={` hidden w-full
                mt-36   md:mt-auto   md:flex items-center gap-8 md:bg-white`}>
                        <li className=" text-base text-black font-bold hover:text-white md:hover:text-red-600
                    hover:underline underline-offset-2 decoration-[0.1rem] 
                    cursor-pointer">Home</li>
                        <li className=" text-base text-black font-bold hover:text-white md:hover:text-red-600
                    hover:underline underline-offset-2 decoration-[0.1rem] 
                    cursor-pointer">Pages</li>
                        <li className=" text-base text-black font-bold hover:text-white md:hover:text-red-600
                    hover:underline underline-offset-2 decoration-[0.1rem] 
                    cursor-pointer">Shop</li>
                        <li className=" text-base text-black font-bold hover:text-white md:hover:text-red-600
                    hover:underline underline-offset-2 decoration-[0.1rem] 
                    cursor-pointer">Element</li>
                        <li className=" text-base text-black font-bold hover:text-white md:hover:text-red-600
                    hover:underline underline-offset-2 decoration-[0.1rem] 
                    cursor-pointer">Blog</li>
                    </ul>


                    {/* MOBILE HUMBURGER MENU */}
                    <div className="md:hidden  h-[15rem] relative   mt-[12rem] w-12 mr-1 flex flex-col gap-4 items-center">
                        <div className={`${isOpen === true ? ' ' : 'bg-inherit'}`}>
                            <Hamburger size={20} toggled={isOpen} toggle={setOpen} distance="lg" duration={0.8} />
                        </div>


                    </div>

                </div>
            </div>


            <div className={`${isOpen == false ? 'translate-y-[50rem]' : 'translate-y-[0rem]'} h-[81vh] w-full top-[0rem] z-20  md:hidden  relative  transition-transform duration-500 flex items-center
            justify-center
            bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900
            
            `}>
                <img src={Hero} alt="navbar image" className=" clip-path w-full z-10  h-full absolute opacity-[0.8]" />


                <div className="w-full flex gap-2 items-center justify-center ml-2 z-30">
                    <ul className=" flex flex-col items-end gap-14 ">
                        
                        <li className="border-white/20 bg-gray-400/20  border border-t-0 border-l-0 border-r-0 py-4 px-16 
                        text-white
                        hover:bg-white 
                        hover:text-black
                        hover:border-gray-400 duration-500 font-semibold">Home</li>
                        <li className="border-white/20 border  border-t-0 border-l-0 border-r-0 py-4 px-16  text-white
                        hover:bg-white 
                        hover:text-black hover:border-gray-400 duration-500 font-semibold">Blog</li>
                        <li className="border-white/20 border border-t-0 border-l-0 border-r-0 py-4 px-16  text-white
                        hover:bg-white 
                        hover:text-black
                        hover:border-gray-400 duration-500 font-semibold">Cloths</li>
                        <li className="border-white/20 border border-t-0 border-l-0 border-r-0 py-4 px-16  text-white
                        hover:bg-white 
                        hover:text-black
                        hover:border-gray-400 duration-500 font-semibold">Shop</li>
                    </ul>

                    
                </div>
            </div>
        </div>
    )
}


{/* <ul className={` ${isOpen == false ? 'hidden' : 'block'} border bg-red-600 pl-1 items-center flex flex-col gap-4 w-max transition-all ease-in-out`}>
                                <li className=" rounded-full text-base text-black font-bold hover:text-white md:hover:text-red-600
                        hover:underline underline-offset-2 decoration-[0.1rem] 
                        cursor-pointer flex">Home</li>
                                <li className=" rounded-full text-base text-black font-bold hover:text-white md:hover:text-red-600
                        hover:underline underline-offset-2 decoration-[0.1rem] 
                        cursor-pointer flex">Shop</li>
                                <li className=" rounded-full text-base text-black font-bold hover:text-white md:hover:text-red-600
                        hover:underline underline-offset-2 decoration-[0.1rem] 
                        cursor-pointer flex">Blog</li>
                                <li className=" rounded-full text-base text-black font-bold hover:text-white md:hover:text-red-600
                        hover:underline underline-offset-2 decoration-[0.1rem] 
                        cursor-pointer flex">CLoths</li>
                            </ul> */}
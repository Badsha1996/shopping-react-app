import { CartLogo, ShopLogo } from "../assets/images"

export default function Navbar() {
    return (
        <div className="w-full h-20 bg-white/80 border-b-[0.05rem] border-gray-700">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <div>
                    <img src={ShopLogo} className="w-16 mix-blend-normal" alt="PageLogo" />
                </div>

                <div className="flex items-center gap-8 ">
                    <div className="relative">
                        <img src={CartLogo} className="w-8 " alt="shoppingCart" />
                        <span className="absolute w-4 h-4 top-0 left-4 text-sm flex 
                        items-center text-white rounded-full bg-red-600 justify-center font-semibold">4</span>
                    </div>
                    <div>
                        <img className="w-8 rounded-full"  src="https://lh3.googleusercontent.com/T14Y9Ms8bvvRg5ivZPjoNDJMZ8TIrkaEuUu6xhKLzabfWkTRqBXmooPTWqsdbmO7_Y288bAPl1bwG_NeAU7Lt5Q3lwibbZz7PnDvGLV2ciG2LQE7=w380-nu-rj-l70-e365" alt="profileLogo" />
                    </div>
                    <ul className="p-4 md:flex items-center gap-8 ">
                        <li className="text-base text-black font-extrabold hover:text-red-600 
                        hover:underline underline-offset-2 decoration-[0.1rem] 
                        cursor-pointer ml-8 mt-20 md:hidden">X</li>
                        <li className="text-base text-black font-bold hover:text-red-600 
                        hover:underline underline-offset-2 decoration-[0.1rem] 
                        cursor-pointer">Home</li>
                        <li className="text-base text-black font-bold hover:text-red-600 
                        hover:underline underline-offset-2 decoration-[0.1rem] 
                        cursor-pointer">Pages</li>
                        <li className="text-base text-black font-bold hover:text-red-600 
                        hover:underline underline-offset-2 decoration-[0.1rem] 
                        cursor-pointer">Shop</li>
                        <li className="text-base text-black font-bold hover:text-red-600 
                        hover:underline underline-offset-2 decoration-[0.1rem] 
                        cursor-pointer">Element</li>
                        <li className="text-base text-black font-bold hover:text-red-600 
                        hover:underline underline-offset-2 decoration-[0.1rem] 
                        cursor-pointer">Blog</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

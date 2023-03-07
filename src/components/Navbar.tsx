import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined"
import { ShopLogo } from "../assets/images"

export default function Navbar() {
    return (
        <div className="w-full h-20 bg-white/80 border-b-[0.05rem] border-gray-700">
            <div className="border max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <div>
                    <img src={ShopLogo} className="w-16" alt="PageLogo" />
                </div>

                <div>
                    <ul className="flex items-center gap-8 ">
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
                    <div>
                        <ShoppingBagOutlined />
                    </div>
                </div>
            </div>

        </div>
    )
}

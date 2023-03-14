import { MdOutlineClose } from "react-icons/md";
import { CartHero } from "../assets/images";

export default function CartItems() {
  return (
    <div className="md:w-2/3 pr-10 ml-2">
        <div>
            <h2 className="text-2xl border border-gray-600 p-1 grid place-items-center">Shopping Cart</h2>
        </div>
        <div>
            <div className="flex items-center justify-between gap-4 mt-4">
                <div className="flex flex-wrap items-center gap-2">
                    <MdOutlineClose className="
                    text-2xl text-gray-600 hover:text-red-600
                    cursor-pointer duration-300"/>
                    <img src={CartHero} alt="cart item image"
                    className="w-32 aspect-square object-cover" />
                </div>
                <h2 className="w-52">title</h2>
                <p className="w-10">$789</p>
                
                <p className="text-sm">Quantity*price</p>
            </div>
        </div>
    </div>
  )
}

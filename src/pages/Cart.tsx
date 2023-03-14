import { CartHero } from "../assets/images"
import CartItems from "../components/CartItems"

export default function Cart() {
  return (
    <div>
      <img src={CartHero} alt="cart screen image" className="
      w-screen h-64 object-center"/>
      <div className="mx-auto py-5 flex items-center 
      justify-center flex-col gap-2 md:flex-row ">
        <CartItems />
        <div className=" md:w-1/3 mx-1 rounded-2xl py-4 px-6 bg-gray-300">
          <div className="flex flex-col gap-6 border-b-2 border-b-gray-400 pb-6">
            <h1 className="font-medium text-2xl">Cart Total</h1>
            <p className="flex gap-4 text-base items-center">
              Subtotal:
              <span className="font-bold text-lg">$200</span>
            </p>
            <p className="flex gap-4 text-base items-start">
              Shipping:
              <span className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </p>
          </div>
          <p className="font-semibold flex justify-between mt-4">
            Total <span className="text-xl font-bold">$200</span>
          </p>
          <button type="button" className="bg-black text-white w-full py-3 mt-4 text-base hover:bg-gray-800 duration-300 cursor-pointer rounded-md">Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

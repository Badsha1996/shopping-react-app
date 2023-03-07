import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'

export default function Slider(): JSX.Element {
    const sliderImages = [
        "https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?w=2000",

        "https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.jpg",

        "https://media.istockphoto.com/id/1254508881/photo/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-concept.jpg?s=612x612&w=0&k=20&c=wuS3z6nPQkMM3_wIoO67qQXP-hfXkxlBc2sedwh-hxc=",

        "https://www.shutterstock.com/image-photo/cheerful-happy-woman-enjoying-shopping-260nw-1417347668.jpg"
    ]

    return (
        <div className="h-auto overflow-x-hidden">
            <div className="w-full relative">
                <div className="w-[400vw] h-[80svh]  flex">
                    <img className="w-screen  object-cover z-0" src={sliderImages[0]} alt="slider images"
                        loading="eager" />

                    <img className="w-screen h-full object-cover z-0" src={sliderImages[1]} alt="slider images"
                        loading="eager" />

                    <img className="w-screen h-full object-cover z-0" src={sliderImages[2]} alt="slider images"
                        loading="eager" />

                    <img className="w-screen h-full object-cover z-0" src={sliderImages[3]} alt="slider images"
                        loading="eager" />
                </div>
                <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-8'>
                    <div className='w-12 h-12 rounded-full border-[0.1rem] border-gray-500 flex items-center 
                    justify-center hover:cursor-pointer
                    hover:bg-gray-600 
                    hover:text-white
                    active:bg-gray-900 duration-300'>
                        <BsFillArrowLeftCircleFill />
                    </div>
                    <div className='w-12 h-12 rounded-full border-[0.1rem] border-gray-500 flex items-center 
                    justify-center hover:cursor-pointer
                    hover:bg-gray-600 
                    hover:text-white
                    active:bg-gray-900 duration-300'>
                        <BsFillArrowRightCircleFill />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

type Idata = {
  image: string,
}
export default function Item({item}:{item:Idata}) {
  return (
    <div>
      <div>
        <img 
        className="w-full h-full object-cover 
        group-hover:scale-100 duration-300"
        src={item.image} alt="item image" />
      </div>
    </div>
  )
}

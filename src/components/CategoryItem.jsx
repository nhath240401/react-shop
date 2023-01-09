

const CategoryItem = ({item}) => {
  return (
    <div className="relative mb-3">
        <img src={item.img} alt="category" className="w-full px-2" />
        <div className="absolute top-[50%] left-[15%] text-white font-bold">
            <h1 className='text-4xl md:text-xl lg:text-4xl'>{item.title}</h1>
            <button className="p-3 font-bold text-black bg-white">SHOP NOW</button>
        </div>
    </div>
  )
}

export default CategoryItem
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Detail = () => {
  return (
    <>
        <Navbar />
        <div className="p-5 bg-white md:flex">
            <img 
            src="https://img.freepik.com/premium-photo/women-s-leather-clutch-beige-isolate-white-background_524291-796.jpg?w=900" 
            alt="" 
            className="flex-1 w-[500px]"
            />

            <div className="flex flex-col items-start justify-center flex-1">
                <h1 className="text-2xl font-bold">Fashionable female hand bag on white</h1>
                <p className="w-[80%] text-[17px] my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aspernatur, iste quibusdam nemo iusto aut fugiat voluptate illo, repellat deserunt nobis deleniti quos sequi soluta, dolor harum et totam ut.</p>
                <h4 className="mb-2 text-2xl"><span className="font-bold">Price:</span> $ 20</h4>
                <div className="flex items-center text-2xl">
                    <span className="font-bold">Color:</span>  
                    <div className="mx-1 bg-red-500 rounded-full cursor-pointer w-7 h-7"></div>
                    <div className="mx-1 bg-blue-500 rounded-full cursor-pointer w-7 h-7"></div>
                    <div className="mx-1 bg-orange-500 rounded-full cursor-pointer w-7 h-7"></div>
                </div>

                <button className="p-[10px] mt-3 font-bold text-white bg-orange-500 rounded-md hover:opacity-90">ADD TO CART</button>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Detail
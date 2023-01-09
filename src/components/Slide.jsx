import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { Pagination } from "swiper";

const Slide = () => {
  return (
    <div className="z-[-100] hidden md:block">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img 
             src="https://img.freepik.com/free-photo/wonderful-asian-woman-coat-holding-sunglasses-front-view-well-dressed-korean-woman-isolated-beige-background_197531-14611.jpg?w=900&t=st=1673234115~exp=1673234715~hmac=8b198dee3aaa2a1238d0a7ab6913d53454f01f9082b835e746d145dedaebc267" 
             alt="slide_banner"
             className=""
             />
             <div className="flex flex-col items-center justify-center h-full bg-red-100 desc_banner">
                <h1 className="text-3xl font-bold">LOUGEWEAR LOVE</h1>
                <h4 className="text-xl w-[80%] py-5">DONT'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</h4>
                <Button />
             </div>
        </SwiperSlide>
        <SwiperSlide>
            <img 
             src="https://img.freepik.com/free-photo/fashionable-model-stylish-hat-red-coat-boots-posing-white-wall-studio_273443-4646.jpg?w=900&t=st=1673233913~exp=1673234513~hmac=0d52f2c23783b2e725b724cb34d96c27eda499afe208522f4ab3c7a46972e1c6" 
             alt="slide_banner"
             className=""
             />
             <div className="flex flex-col items-center justify-center h-full bg-red-100 desc_banner">
                <h1 className="text-3xl font-bold">SUMMER SALE</h1>
                <h4 className="text-xl w-[80%] py-5">DONT'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</h4>
                <Button />
             </div>
        </SwiperSlide>
        <SwiperSlide>
            <img 
             src="https://img.freepik.com/free-photo/online-shopping-beauty-concept-satisfied-asian-female-customer-showing-thumbs-up-making-purchase-internet-smartphone-standing-pink-background_1258-74606.jpg?w=900&t=st=1673233945~exp=1673234545~hmac=12520f4f28a6fbd85c1e9d2f06c1167e7efd1116629499bc524374dfb292b0d2" 
             alt="slide_banner"
             className=""
             />
             <div className="flex flex-col items-center justify-center h-full bg-red-100 desc_banner">
                <h1 className="text-3xl font-bold">AUTUMN COLLECTION</h1>
                <h4 className="text-xl w-[80%] py-5">DONT'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</h4>
                <Button />
             </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slide
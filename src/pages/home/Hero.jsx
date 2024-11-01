import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { swiperData } from "@/constants";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import image1 from "@/assets/image1.jpg";

function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-auto"
      >
        {swiperData.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={image1}
              alt="bgImg"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="w-full h-[50vh] lg:h-[70vh] relative">
              <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
              <div className="w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4 gap-4">
                <h5 className="lg:text-4xl md:text-3xl  text-2xl text-indigo-700 font-semibold mb-2 uppercase">
                  {item.slogan}
                </h5>
                <h1 className="lg:text-8xl md:text-7xl text-5xl font-bold text-white mb-4 uppercase">
                  {item.title}
                </h1>
                <p className="text-base md:text-base lg:text-base text-gray-500 font-medium mb-6 text-center">
                  {item.desc}
                </p>
                <Button className=" text-xl font-semibold rounded-full bg-indigo-600  hover:bg-indigo-600/70 ">
                  Get Started
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full h-auto flex items-center justify-center md:justify-between sm:justify-center lg:justify-between gap-5 md:gap-7 lg:gap-7 px-6 md:px-16 lg:px-24 mt-6 flex-wrap">
        <div className="flex flex-col items-center justify-center w-[48%] md:w-[30%] lg:w-fit py-8 lg:p-7 px-10 bg-black/10 hover:bg-black/30  rounded-md cursor-pointer">
          <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
            1200+
          </h5>
          <p className="text-lg text-gray-600 font-medium">Members</p>
        </div>
      </div>
    </>
  );
}

export default Hero;

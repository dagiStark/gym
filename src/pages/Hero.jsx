import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../assets/image1.jpg";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";

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
        className="mySwiper w-full h-auto "
      >
        <SwiperSlide>
          <div className="w-full h-[70vh] relative">
            <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
            <div className="w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4 bg-black">
              <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-indigo-700 font-semibold mb-2 uppercase">
                Keep your body
              </h5>
              <h1 className="lg:text-8xl md:text-7xl text-5xl font-bold text-white mb-4 uppercase">
                burning
              </h1>
              <p className="text-base md:text-base lg:text-base text-gray-500 font-medium mb-6 text-center">
                Get ready to burn off some serious fat with our high quality
                products.
              </p>
              <Button className="w-[85px] sm:w-[75%] md:w-[35%] lg:w-[15%] text-xl font-semibold rounded-full bg-indigo-600  hover:bg-indigo-600/70 ease-out duration-500">
                Get Started
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Hero;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../assets/image1.jpg";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
        className=" w-full h-auto "
      >
        <SwiperSlide>
          <div className="w-full h-[70vh] relative">
            <div className="w-full h-full bg-black/80 absolute top-0 left-0 z-10"></div>
            {""}
            <div className="w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4">
              <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-indigo-400 font-semibold mb-2 uppercase">
                Keep your body
              </h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[70vh] relative">
            <div className="w-full h-full bg-black/80 absolute top-0 left-0 z-10"></div>
            {""}
            <div className="w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4">
              <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-indigo-400 font-semibold mb-2 uppercase">
                Keep your body
              </h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Hero;

import { Dumbbell } from "lucide-react";
import { servicesData } from "@/constants";
import { Button } from "@/components/ui/button";

function Services() {
  return (
    <div className="w-full h-auto flex items-center py-12 md:py-14 lg:py-16 px-6 md:px-16 lg:px-24">
      <div className="w-full h-auto flex items-center justify-center flex-col gap-3">
        <h6
          className="text-base 
        md:text-lg font-medium rounded-t-md px-4 py-2 text-gray-200 bg-black/20 flex items-center justify-center md:justify-start gap-x-2"
        >
          <Dumbbell className="w-6 h-6 text-indigo-600" />
          Our Services
        </h6>
        <div className="w-full h-auto flex items-start justify-center relative gap-x-4 gap-y-5 flex-wrap mb-10">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className=" sm:w-[90%] md:w-[40%] lg:w-[20%] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-10 ease-out transition-all duration-500 py-10"
            >
              <div className="w-full h-full  absolute top-0 left-0 -z-10">
                <img src={item.serviceImg} alt="bgImg" />
              </div>

              <div className="w-full h-full flex items-center justify-center flex-col text-white p-4 z-50">
                <div
                  className="text-base 
                        md:text-lg font-medium px-4 py-4 text-gray-200 bg-indigo-200 bg-opacity-30 
                        flex items-center justify-center md:justify-start gap-x-2 border-4 rounded-full border-indigo-600 mb-4"
                >
                  <Dumbbell className="w-6 h-6 " />
                </div>
                <h1 className="text-xl text-gray-100 font-semibold text-center mb-4">
                  {item.title}
                </h1>
                <p className="text-lg text-gray-400 font-normal text-center mb-4">
                  {item.desc}
                </p>
                <div>
                  <Button className=" text-indigo-600 bg-transparent hover:bg-transparent">
                    Read More →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

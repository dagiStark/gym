import { Dumbbell } from "lucide-react";


function Services() {
  return (
    <div className="w-full h-auto flex items-center py-12 md:py-14 lg:py-16 px-6 md:px-16 lg:px-24">
      <div className="w-full h-auto flex items-center justify-center flex-col">
        <h6
          className="text-base 
        md:text-lg font-medium rounded-t-md px-4 py-2 text-gray-200 bg-black/20 flex items-center justify-center md:justify-start gap-x-2 "
        >
          <Dumbbell className="w-6 h-6 text-indigo-600" />
          Our Services
        </h6>
        <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
          <div className="w-full h-auto rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-">
            <img src="https://i.ibb.co/4b2r0r3/image.png" alt="bgImg" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

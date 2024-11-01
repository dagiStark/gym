import { Dumbbell } from "lucide-react";
import { exercises } from "@/constants";

function Popular() {
  return (
    <div className="w-full h-auto flex items-center flex-col py-12 md:py-14 lg:py-16 px-6 md:px-16 lg:px-24">
      <div className="w-full h-auto flex items-center justify-center flex-col gap-3">
        <h6
          className="text-base 
      md:text-lg font-medium rounded-t-md px-4 py-2 text-gray-200 bg-black/20 flex items-center justify-center md:justify-start gap-x-2"
        >
          <Dumbbell className="w-6 h-6 text-indigo-600" />
          Our Popular Exercises
        </h6>
        <div className="flex items-center w-full h-auto gap-x-5 gap-y-6 flex-wrap lg:flex-nowrap">
          {exercises.map((item, index) => (
            <div
              key={index}
              className="w-[48%] lg:w-[24%] h-auto rounded-lg overflow-hidden hover:shadow-indigo-900/40 ease-out duration-700 cursor-pointer "
            >
              <img
                src={item.trainerImg}
                alt="exercise image"
                className="w-full h-[25vh] md:h-[33vh] lg:h-[30vh] object-cover rounded-lg"
              />
              <div className="w-full h-auto py-4 px-3">
                <h1 className="text-lg text-white font-semibold mb-1">
                  {item.name}
                </h1>
                <div className="flex items-center gap-x-2 w-full h-auto">
                  <p className="text-sm text-gray-300">{item.duration}</p>
                  <span className="w-1 h-1 bg-gray-600 rounded-full" />
                  <p className="">{item.sets}</p>
                  <span className="w-1 h-1 bg-gray-600 rounded-full" />
                  <p className="text-sm text-gray-300">{item.calories}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;

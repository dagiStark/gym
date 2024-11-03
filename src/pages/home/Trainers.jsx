import { trainersData } from "@/constants";
import { Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";


function Trainers() {
  return (
    <div className="w-full h-auto flex items-center flex-col py-12 md:py-14 lg:py-16 px-6 md:px-16 lg:px-24">
      <div className="w-full h-auto flex items-center justify-center flex-col gap-3 md:gap-5 lg:gap-6">
        <h6
          className="text-2xl md:text-4xl
        font-medium rounded-t-md px-4 py-2 text-gray-200 bg-black/20 flex items-center justify-center md:justify-start gap-x-2 md:gap-x-4"
        >
          <Dumbbell className="w-6 h-4 md:w-10 md:h-10 -rotate-45 text-indigo-600" />
          Our Expert Trainers
        </h6>

        <div className="flex items-center justify-center w-full h-auto gap-x-4 mg:gap-x-5 gap-y-4 md:gap-y-6 lg:gap-y-8 flex-wrap mb-10">
          {trainersData.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl w-[90%] md:w-[40%] lg:w-[23%] h-[60vh] md:h-[53vh] lg:h-[50vh] border-2 border-black"
            >
              <img
                src={item.trainerImg}
                alt="trainer image"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="w-full h-auto bg-gray-900/70 absolute bottom-0 left-0 py-4 px-2 flex items-center justify-center flex-col">
                <h1 className="text-xl text-white font-semibold">
                  {item.name}
                </h1>
                <p className="text-sm text-gray-300">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button
          variant="outline"
          className="w-full md:w-auto px-7 py-2 text-base font-medium uppercase justify-center text-indigo-600 border border-indigo-500"
        >
          view all trainers
        </Button>
      </div>
    </div>
  );
}

export default Trainers;

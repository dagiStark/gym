import { CheckSquare, Dumbbell } from "lucide-react";

function PricingPlan() {
  return (
    <div className="w-full h-auto flex items-center flex-col py-12 md:py-14 lg:py-16 px-6 md:px-16 lg:px-24">
      <div className="w-full h-auto flex items-center justify-center flex-col gap-3">
        <h6
          className="text-base 
    md:text-lg font-medium rounded-t-md px-4 py-2 text-gray-200 bg-black/20 flex items-center justify-center md:justify-start gap-x-2"
        >
          <Dumbbell className="w-6 h-6 text-indigo-600" />
          Our Pricing Plan
        </h6>

        <div className="flex justify-center flex-wrap w-full h-auto gap-x-5 gap-y-8">
          <div className="w-full  lg:w-[30%] h-auto rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-5 ease-out transition-all duration-500 py-10">
            <h2 className="md:text-4xl text-3xl text-white font-semibold mb-5">
              Basic Plan
            </h2>
            <h1 className="text-4xl md:text-4xl text-indigo-600 font-bold mb-3 tracking-wide">
              $165.00
              <span className="text-lg md:text-xl text-gray-300 font-medium tracking-normal">
                /month
              </span>
            </h1>
            <hr className="border-gray-600/40 my-7" />
            <div className="w-full h-auto space-y-2 mb-8">
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 text-base">
                  {" "}
                  Get access to all gym classes
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 text-base">
                  Unlimited yoga classes
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-400 text-base">Use of lockers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;

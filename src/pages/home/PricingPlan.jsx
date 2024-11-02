import { CheckSquare, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

function PricingPlan() {
  return (
    <div className="w-full h-auto flex items-center flex-col py-12 md:py-14 lg:py-16 px-6 md:px-16 lg:px-24">
      <div className="w-full h-full flex items-center justify-center flex-col gap-3">
        <h6
          className="text-2xl md:text-4xl
        font-medium rounded-t-md px-4 py-2 text-gray-200 bg-black/20 flex items-center justify-center md:justify-start gap-x-2 md:gap-x-4"
        >
          <Dumbbell className="w-6 h-4 md:w-10 md:h-10 -rotate-45 text-indigo-600" />
          Our Pricing Plan
        </h6>

        <div className="flex justify-center items-center flex-wrap w-full h-auto gap-x-5 gap-y-8">
          <div className="w-full flex flex-col items-center border-[5px] border-indigo-400 md:w-[60%]  lg:w-[27%] h-auto rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-5 ease-out transition-all duration-500 py-10">
            <h2 className="md:text-4xl text-3xl text-white font-semibold mb-5">
              Basic Plan
            </h2>
            <h1 className="text-4xl md:text-4xl text-indigo-600 font-bold mb-3 tracking-wide">
              $165.00
              <span className="text-lg md:text-xl text-gray-300 font-medium tracking-normal">
                /month
              </span>
            </h1>
            <hr className="border-indigo-600/70  w-[60%] my-7 " />
            <div className="w-full flex flex-col items-center justify-center h-auto space-y-2 mb-8">
              <div>
                <div className="w-full h-auto flex items-start gap-x-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  <p className="text-gray-400 text-base">
                    {" "}
                    Get access to all gym classes
                  </p>
                </div>
                <div className="w-full h-auto flex items-start  gap-x-2">
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

            <div>
              <Button className="w-full rounded-none md:w-auto px-7 py-2 text-base font-medium uppercase justify-center text-white bg-indigo-500">
                Select Plan
              </Button>
            </div>
          </div>

          <div className="w-full flex flex-col items-center border-4 border-indigo-400 lg:w-[27%] h-auto rounded-xl relative overflow-hidden cursor-pointer z-10 hover:-translate-y-5 ease-out transition-all duration-500 py-10">
            <h2 className="md:text-4xl text-3xl text-white font-semibold mb-5">
              Premium Plan
            </h2>
            <h1 className="text-4xl md:text-4xl text-indigo-600 font-bold mb-3 tracking-wide">
              $200.00
              <span className="text-lg md:text-xl text-gray-300 font-medium tracking-normal">
                /month
              </span>
            </h1>
            <hr className="border-indigo-600/70  w-[60%] my-7 " />
            <div className="w-full flex flex-col items-center justify-center h-auto space-y-2 mb-8">
              <div>
                <div className="w-full h-auto flex items-start gap-x-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  <p className="text-gray-400 text-base">
                    {" "}
                    Get access to all gym classes
                  </p>
                </div>
                <div className="w-full h-auto flex items-start  gap-x-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  <p className="text-gray-400 text-base">
                    Unlimited yoga classes
                  </p>
                </div>
                <div className="w-full h-auto flex items-start gap-x-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  <p className="text-gray-400 text-base">Use of lockers</p>
                </div>
                <div className="w-full h-auto flex items-start gap-x-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  <p className="text-gray-400 text-base">Weekly pool access</p>
                </div>
                <div className="w-full h-auto flex items-start gap-x-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  <p className="text-gray-400 text-base">Free gym t shirt</p>
                </div>
                <div className="w-full h-auto flex items-start gap-x-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  <p className="text-gray-400 text-base">
                    20% discount on all gym products
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Button className="w-full rounded-none md:w-auto px-7 py-2 text-base font-medium uppercase justify-center text-white bg-indigo-500">
                Select Plan
              </Button>
            </div>
          </div>

          <div className="w-full flex flex-col items-center border-[5px] border-indigo-400 lg:w-[27%] h-auto rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-5 ease-out transition-all duration-500 py-10">
            <h2 className="md:text-4xl text-3xl text-white font-semibold mb-5">
              VIP Plan
            </h2>
            <h1 className="text-4xl md:text-4xl text-indigo-600 font-bold mb-3 tracking-wide">
              $365.00
              <span className="text-lg md:text-xl text-gray-300 font-medium tracking-normal">
                /month
              </span>
            </h1>
            <hr className="border-indigo-600/70  w-[60%] my-7 " />
            <div className="w-full flex flex-col items-center justify-center h-auto space-y-2 mb-8">
              <div>
                <div className="w-full h-auto flex items-start gap-x-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  <p className="text-gray-400 text-base">
                    {" "}
                    Get access to all gym classes
                  </p>
                </div>
                <div className="w-full h-auto flex items-start  gap-x-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  <p className="text-gray-400 text-base">
                    Unlimited yoga classes
                  </p>
                </div>
                <div className="w-full h-auto flex items-start gap-x-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  <p className="text-gray-400 text-base">Use of lockers</p>
                </div>
                <div className="w-full h-auto flex items-start gap-x-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  <p className="text-gray-400 text-base">Weekly pool access</p>
                </div>
                <div className="w-full h-auto flex items-start gap-x-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  <p className="text-gray-400 text-base">Free gym t shirt</p>
                </div>
                <div className="w-full h-auto flex items-start gap-x-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  <p className="text-gray-400 text-base">
                    20% discount on all gym products
                  </p>
                </div>
                <div className="w-full h-auto flex items-start gap-x-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  <p className="text-gray-400 text-base">personal trainer</p>
                </div>
              </div>
            </div>

            <div>
              <Button className="w-full rounded-none md:w-auto px-7 py-2 text-base font-medium uppercase justify-center text-white bg-indigo-500">
                Select Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;

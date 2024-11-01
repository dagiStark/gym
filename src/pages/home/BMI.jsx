import { Dumbbell } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function BMI() {
  return (
    <div className="w-full h-auto flex items-center py-12 md:py-14 lg:py-16 px-6 md:px-16 lg:px-24">
      <div className="w-full h-auto flex items-center justify-center flex-col">
        <h6
          className="text-base 
          md:text-lg font-medium rounded-t-md px-4 py-2 text-gray-200 bg-black/20 flex items-center justify-center md:justify-start gap-x-2 "
        >
          <Dumbbell className="w-6 h-6 text-indigo-600" />
          Calculate your BMI
        </h6>
        <div className="w-full h-auto flex items-end justify-center bg-black/20 rounded-md gap-3 md:gap-5 px-2 py-5 md:px-0 flex-wrap">
          <div className="w-[50%] md:w-[25%] h-auto p-2 gap-2 flex flex-col">
            <Label className="">Weight (kg)</Label>
            <Input placeholder="Enter your weight" />
          </div>
          <div className="w-[50%] md:w-[25%] h-auto p-2 gap-2 flex flex-col">
            <Label className="">Height (cm)</Label>
            <Input placeholder="Enter your height" />
          </div>
          <div className="w-[50%] md:w-[25%] h-auto p-2">
            <Button
              variant="outline"
              className="w-full md:w-auto px-7 py-2 text-base font-medium uppercase justify-center text-indigo-600 border border-indigo-500"
            >
              Calculate BMI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BMI;

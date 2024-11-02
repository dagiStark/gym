import { Dumbbell } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function BMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [btnText, setBtnText] = useState("Calculate your bmi");

  const calculateBmi = () => {
    const heightInMeters = height * 0.01;
    const bmi = weight / (heightInMeters * heightInMeters);
    setBtnText(`Your bmi is: ${bmi.toFixed(2)}`);
  };

  useEffect(() => {
    setBtnText("calculate your bmi");
  }, [height, weight]);

  return (
    <div className="w-full h-auto flex items-center py-12 md:py-14 lg:py-16 px-6 md:px-16 lg:px-24">
      <div className="w-full h-auto flex items-center justify-center flex-col">
        <h6
          className="text-2xl md:text-4xl
           font-medium rounded-t-md px-4 py-2 text-gray-200 bg-black/20 flex items-center justify-center md:justify-start gap-x-2 md:gap-x-4 "
        >
          <Dumbbell className="w-6 h-4 md:w-10 md:h-10 -rotate-45 text-indigo-600" />
          Calculate your BMI
        </h6>
        <div className="w-full h-auto flex items-end justify-center bg-black/20 rounded-md gap-3 md:gap-5 px-2 py-5 md:px-0 flex-wrap">
          <div className="w-[50%] md:w-[25%] h-auto p-2 gap-2 flex flex-col">
            <Label className="text-white">Weight (kg)</Label>
            <Input
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="w-[50%] md:w-[25%] h-auto p-2 gap-2 flex flex-col">
            <Label className="text-white">Height (cm)</Label>
            <Input
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="w-[80%] md:w-[25%] h-auto p-2">
            <Button
              type="submit"
              variant="outline"
              className="w-full md:w-auto px-7 py-2 text-base md:text-base font-medium uppercase justify-center text-indigo-600 border-4 border-indigo-500"
              onClick={calculateBmi}
            >
              {btnText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BMI;

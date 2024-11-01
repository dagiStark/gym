import { Dumbbell } from "lucide-react";

function BMI() {
  return (
    <div className="w-full h-auto flex items-center py-12 md:py-14 lg:py-16 px-6 md:px-16 lg:px-24">
      <div className="w-full h-auto flex items-center justify-center flex-col">
        <h6
          className="text-base 
          md:text-lg font-medium rounded-t-md px-4 py-2 text-gray-200 bg-black/20 flex items-center justify-center md:justify-start gap-x-2 mb-3 "
        >
          <Dumbbell className="w-6 h-6 text-indigo-600" />
          Calculate your BMI
        </h6>
      </div>
    </div>
  );
}

export default BMI;

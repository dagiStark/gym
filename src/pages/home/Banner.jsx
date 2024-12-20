import { Button } from "@/components/ui/button";


function Banner() {
  return (
    <div className="flex items-center justify-center bg-black/20 flex-col py-12 md:py-14 lg:py-16 px-6 md:px-16 lg:px-24 relative z-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 uppercase mb-4 text-center">
        No <span className="text-indigo-600">Pain</span>, No{" "}
        <span className="text-indigo-600">Gain</span>
      </h1>
      <p className="text-lg text-gray-300 font-medium mb-8 text-center">
        Ignite Your Fitness Journey with Premium Solution
      </p>
      <Button className="px-10 py-3 uppercase rounded-full bg-indigo-600 hover:bg-indigo-400/70">
        Become a member
      </Button>
    </div>
  );
}

export default Banner;

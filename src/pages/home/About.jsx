import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
import image4 from "../../assets/images/image4.jpg";

function About() {
  return (
    <div className="w-full h-auto flex items-center justify-between gap-7 py-12 md:py-14 lg:py-16 px-6 md:px-16 lg:px-24 mt-6 flex-wrap-reverse">
      <div className="w-full lg:w-[38%] h-[500px] relative overflow-hidden">
        <img
          src={image4}
          alt="About image"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="w-full lg:w-[50%] text-start gap-3 flex flex-col">
        <h6 className="text-2xl md:text-4xl font-medium text-gray-200 flex items-center justify-center md:justify-start lg:justify-start gap-x-2 md:gap-x-4 mb-3">
          <Dumbbell className="w-6 h-4 md:w-10 md:h-10 -rotate-45 text-indigo-600" />
          About us
        </h6>
        <h1 className="text-2xl md:text-3xl  font-semibold text-gray-200 mb-4 leading-normal pe-1 md:pe-4 lg:pe-5">
          Effortless Strength, Timely Gains: Building Better Bodies, Faster
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-medium mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          laborum minus ab ipsam sed, aut impedit distinctio ipsa maiores,
          necessitatibus rem quo veniam voluptate qui dolores vero tempora ipsum
          error. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis laborum minus ab ipsam sed, aut impedit distinctio ipsa
          maiores, necessitatibus rem quo veniam voluptate qui dolores vero
          tempora ipsum error. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis laborum minus ab ipsam sed, aut impedit
          distinctio ipsa maiores, necessitatibus rem quo veniam voluptate qui
          dolores vero tempora ipsum error. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perferendis laborum minus ab ipsam sed,
        </p>
        <div>
          <Button
            variant="outline"
            className="w-full md:w-auto px-7 py-2 text-base font-medium uppercase justify-center text-indigo-600 border-4 border-indigo-500"
          >
            Become a member
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;

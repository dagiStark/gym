import { Button } from "@/components/ui/button";
import { Dumbbell, MailIcon, MapIcon, PhoneIcon } from "lucide-react";

function Footer() {
  return (
    <div className="flex items-center justify-center w-full h-auto px-6 md:px-16 lg:px-24 mt-6 bg-black/20 flex-wrap">
      <div className="flex items-start w-full h-auto justify-center md:justify-between lg:justify-between gap-5 mb-10 flex-wrap">
        <div className="flex items-center md:items-start lg:items-start p-2 flex-col justify-center w-full md:w-[30%] lg:w-[30%]">
          <Button className="flex items-end relative w-fit h-auto text-3xl text-indigo-600 font-semibold">
            G <span className="text-xl font-bold text-gray-300">Y</span> M
            <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]" />
          </Button>
          <p className="text-base text-gray-500 font-normal mb-4 text-center md:text-start ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            veniam consectetur maxime provident libero, minus magnam officiis
            qui mollitia illo facere dolorem omnis maiores eveniet, amet
            reiciendis possimus, cum aut!
          </p>
          <div className="w-full h-auto space-y-2">
            <div
              className="flex items-center justify-center md:justify-start lg:justify-start w-full h-auto gap-x-2 gap-y-2 hover:text-indigo-600
            ease-out duration-300 cursor-pointer"
            >
              <MapIcon className="w-5 h-5 text-indigo-600" />
              <p className="text-base">123 Main Street, New York, NY 10012</p>
            </div>
            <div
              className="flex items-center justify-center md:justify-start lg:justify-start w-full h-auto gap-x-2 gap-y-2 hover:text-indigo-600
            ease-out duration-300 cursor-pointer"
            >
              <MailIcon className="w-5 h-5 text-indigo-600" />
              <p className="text-base">getchgym@gmail.com</p>
            </div>
            <div
              className="flex items-center justify-center md:justify-start lg:justify-start w-full h-auto gap-x-2 gap-y-2 hover:text-indigo-600
            ease-out duration-300 cursor-pointer"
            >
              <PhoneIcon className="w-5 h-5 text-indigo-600" />
              <p className="text-base">+251-645-789-567</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end flex-wrap w-full md:w-[65%] lg:w-[65%] h-auto gap-5">
          <div className="flex items-center flex-col justify-center w-full md:w-[48%] lg:w-[33%]">
            <h2>Services</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

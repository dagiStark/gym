import { Button } from "@/components/ui/button";
import { Dumbbell, MailIcon, MapIcon, PhoneIcon } from "lucide-react";


function Footer() {

  return (
    <div className="flex items-center justify-center w-full h-auto px-6 md:px-16 lg:px-24 mt-6 bg-black/20 flex-wrap">
      <div className="flex items-start w-full h-auto justify-center md:justify-between lg:justify-between gap-5 mb-10 flex-wrap p-3 mt-5">
        <div className="flex items-center md:items-start lg:items-start flex-col justify-center w-full md:w-[30%] lg:w-[30%] gap-3">
          <Button className="flex items-end relative w-fit h-auto text-3xl text-indigo-600 font-semibold bg-transparent">
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
              className="flex items-center justify-start md:justify-start lg:justify-start w-full h-auto gap-x-2 gap-y-2 
            cursor-pointer"
            >
              <MapIcon className="w-5 h-5 text-indigo-600" />
              <p className="text-base text-gray-400 hover:text-indigo-600  ease-out duration-300">
                123 Main Street, New York, NY 10012
              </p>
            </div>
            <div
              className="flex items-center justify-start md:justify-start lg:justify-start w-full h-auto gap-x-2 gap-y-2 hover:text-indigo-600
            ease-out duration-300 cursor-pointer"
            >
              <MailIcon className="w-5 h-5 text-indigo-600" />
              <p className="text-base text-gray-400 hover:text-indigo-600  ease-out duration-300">
                getchgym@gmail.com
              </p>
            </div>
            <div
              className="flex items-center justify-start md:justify-start lg:justify-start w-full h-auto gap-x-2 gap-y-2 hover:text-indigo-600
            ease-out duration-300 cursor-pointer"
            >
              <PhoneIcon className="w-5 h-5 text-indigo-600" />
              <p className="text-base text-gray-400 hover:text-indigo-600  ease-out duration-300">
                +251-645-789-567
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end flex-wrap w-full md:w-[65%] lg:w-[65%] h-auto gap-5">
          <div className="flex items-center flex-col justify-center w-[40%] md:w-[48%] lg:w-[33%]">
            <h2 className="text-lg text-gray-200 font-medium mb-4">Services</h2>
            <div className="w-full h-auto">
              <ul className="w-full h-auto space-y-2">
                <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                  Strength Training
                </li>
                <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                  Yoga Session
                </li>
                <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                  Dead Lift Challenge
                </li>
                <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                  Squats Challenge
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-center flex-col justify-center w-[40%] md:w-[48%] lg:w-[33%]">
            <h2 className="text-lg text-gray-200 font-medium mb-4">
              Quick Links
            </h2>
            <div className="w-full h-auto">
              <ul className="w-full h-auto space-y-2">
                <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                  Home
                </li>
                <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                  About
                </li>
                <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                  Pricing Plan
                </li>
                <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="w-full h-1 bg-gray-800 my-5" />

        <div className="flex items-center justify-center w-full h-auto lg:bg-gray-900 md:bg-gray-900 bg-gray-800 relative">
          <div className="flex w-full items-center justify-center absolute top-0 left-0 flex-wrap-reverse gap-y-4 gap-6">
            <p className="text-sm text-gray-400 font-normal md:bg-gray-900 lg:bg-gray-900 bg-gray-800 py-1 px-4 rounded-md">
              @2024 G-Tech, All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

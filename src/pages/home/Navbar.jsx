import { navbarData } from "@/constants";
import { Button } from "@/components/ui/button";
import { Dumbbell, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Navbar() {
  return (
    <div className="w-full h-auto flex items-center fixed z-10 bg-black justify-between  px-6 md:px-16 lg:px-24 mt-6 flex-wrap">
      <Button className="flex items-end relative w-fit h-auto text-3xl text-indigo-600 font-semibold">
        G <span className="text-xl font-bold text-gray-300">Y</span> M
        <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]" />
      </Button>

      <Sheet>
        <SheetTrigger className="text-indigo-600 md:hidden lg:hidden">
          <MenuIcon />
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className=" gap-x-5 items-center hidden md:flex ld:flex">
        <div className="w-full h-auto flex flex-row flex-wrap gap-x-5 gap-y-4 md:gap-y-6 lg:gap-y-8">
          {navbarData.map((item, index) => (
            <div
              key={index}
              className="w-auto gap-x-4 gap-y-2 md:gap-y-4 lg:gap-y-6 hover:text-indigo-600 ease-out duration-300 cursor-pointer"
            >
              <p className="text-xl text-indigo-600">{item.name}</p>
            </div>
          ))}
        </div>
        <div className="ml-auto">
          <Button
            variant="outline"
            className="w-full md:w-auto px-7 py-2 text-base font-medium uppercase justify-center text-indigo-600 border border-indigo-500"
          >
            send message
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex items-center justify-center w-full h-auto px-6 md:px-16 lg:px-24 mt-6 bg-black/20 flex-wrap">
      <div className="flex items-start w-full h-auto justify-center md:justify-between lg:justify-between gap-5 mb-10 flex-wrap">
        <div className="flex items-center md:items-start lg:items-start p-2 flex-col justify-center w-full md:w-[30%] lg:w-[30%]">
          <Link className="">
            G <span>Y</span>
            <Dumbbell />
          </Link>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

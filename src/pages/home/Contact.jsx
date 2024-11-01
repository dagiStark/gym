import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-3 mb-24">
      <h6
        className="text-base 
  md:text-lg font-medium rounded-t-md px-4 py-2 text-gray-200 bg-black/20 flex items-center justify-center md:justify-start gap-x-2"
      >
        <Dumbbell className="w-6 h-6 text-indigo-600" />
        Ask About GYMs
      </h6>

      <div className="flex items-center w-full h-auto gap-x-8 lg:gap-y-8 md:gap-y-8 gap-y-6 flex-col p-4 md:p-7 ">
        <div className="flex items-center w-full gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-4 md:gap-y-6 lg:gap-y-8 flex-wrap md:flex-nowrap">
          <div className="w-[50%] md:w-[33%] lg:w-[30%] h-auto ">
            <Input
              type="text"
              placeholder="Enter your full name"
              id="fullName"
              name="fullName"
              className="w-full h-12 px-4"
            />
          </div>

          <div className="w-[50%] md:w-[33%] lg:w-[30%] h-auto">
            <Input
              type="text"
              placeholder="Enter your email"
              id="email"
              name="email"
              className="w-full h-12 px-4"
            />
          </div>

          <div className="w-[33%] md:w-[33%] lg:w-[30%] h-auto">
            <Input
              type="text"
              placeholder="write your subject"
              id="subject"
              name="subject"
              className="w-full h-12 px-4"
            />
          </div>
        </div>

        <Textarea
          id="message"
          name="message"
          placeholder="write your message"
          className="w-full px-4"
        />
        <div>
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

export default Contact;

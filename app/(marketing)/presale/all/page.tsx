import Presales from "@/components/marketing/presale/Presales";
import TickerSlider from "@/components/marketing/presale/TickerSlider";
import { TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col  p-4 mt-20 space-y-4 ">
      <div className="hidden lg:flex w-full">
        <div className=" w-[250px] flex items-center ">
          <div className="flex   p-4 w-full   mr-4  items-center cursor-pointer ">
            <div className="flex p-2 items-center space-x-2  ">
              <Image
                src={"/images/scottish.webp"}
                width={40}
                height={40}
                className="rounded-full"
                alt="blendish"
              />
              <span className="font-bold text-lg">Blendish</span>
            </div>
          </div>
          <TrendingUp className="w-10 h-10 mr-2" />
        </div>
        <TickerSlider />
      </div>
      <div className="w-full">
        <Presales />
      </div>
    </div>
  );
}

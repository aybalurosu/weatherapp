import { useContext } from "react";
import { MenuContext } from "../MenuContext";
import Image from "next/image";

export default function WheaterTime() {

  const { hourlyTemperature } = useContext(MenuContext);

  return (
    <div className="border-1 border-[#10386900] w-full p-4 rounded-2xl bg-[#10386953] h-28 scroll-hidden overflow-x-auto">
      <div className="inline-flex items-center justify-center gap-4">
        {hourlyTemperature?.time.map((hour, i) => (
          <div key={i} className="flex flex-col items-center text-white font-medium">
            <div>{Number(hour.slice(11, 13))}h</div>
            <Image src={'/icons/sun.png'} width={27} height={30} alt=""></Image>
            <div>{hourlyTemperature.temperature[i]}º</div>
          </div>
        ))}
      </div>
    </div>
  );
}

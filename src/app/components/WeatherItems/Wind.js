import Image from "next/image";
import { MenuContext } from "../MenuContext";
import { useContext } from "react";

export default function Wind() {
  
  const {windSpeed} = useContext(MenuContext);
  
  return (
    <div className="border-1 border-[#10386900] p-3 rounded-2xl bg-[#244779d8] flex flex-col items-center gap-1 w-full h-26">
      <h1 className="text-blue-200 text-sm font-medium">WIND</h1>
      <Image src={'/icons/wind-solid.svg'} width={30} height={20} alt=""></Image>
      <h1 className="text-light text-sm text-white text-center">{windSpeed} km/h</h1>
    </div>
  );
}

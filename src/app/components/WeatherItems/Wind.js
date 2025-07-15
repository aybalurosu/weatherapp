import Image from "next/image";
import { MenuContext } from "../MenuContext";
import { useContext } from "react";

export default function Wind() {
  
  const {windSpeed} = useContext(MenuContext);
  
  return (
    <div className="border-1 border-[#10386900] p-4 rounded-2xl bg-[rgba(16,56,105,0.33)] flex flex-col items-center gap-2">
      <h1 className="text-blue-200 text-sm font-medium">WIND</h1>
      <Image src={'/icons/wind-solid.svg'} width={30} height={20} alt=""></Image>
      <h1 className="text-light font-2xl text-white text-center">{windSpeed} km/h</h1>
    </div>
  );
}

import Image from "next/image";
import { useContext } from "react";
import { MenuContext } from "../MenuContext";

export default function UVIndex() {

  const {uvIndex} = useContext(MenuContext);

  return (
    <div className="border-1 border-[#10386900] p-3 rounded-2xl bg-[#244779d8] flex flex-col items-center gap-1 w-full h-26">
      <h1 className="text-blue-200 text-sm font-medium text-center">UV INDEX</h1>
      <Image src={'/icons/uvindex.png'} width={40} height={20} alt=""></Image>
      <h1 className="text-light text-sm text-white text-center">{uvIndex} %</h1>
    </div>
  );
}

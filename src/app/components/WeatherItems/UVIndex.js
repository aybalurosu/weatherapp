import Image from "next/image";
import { useContext } from "react";
import { MenuContext } from "../MenuContext";

export default function UVIndex() {

  const {uvIndex} = useContext(MenuContext);

  return (
    <div className="border-1 border-[#10386900] p-4 rounded-2xl bg-[rgba(16,56,105,0.33)] flex flex-col items-center gap-2">
      <h1 className="text-blue-200 text-sm font-medium">UV INDEX</h1>
      <Image src={'/icons/uvindex.png'} width={40} height={20} alt=""></Image>
      <h1 className="text-light font-2xl text-white text-center">{uvIndex} %</h1>
    </div>
  );
}

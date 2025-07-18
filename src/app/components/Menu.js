import Image from "next/image";
import { useContext } from "react";
import { MenuContext } from "./MenuContext";

export default function Menu({ isOpen }) {

  const { savedCities, setSavedCities } = useContext(MenuContext);
  const { setCurrentWeatherCity } = useContext(MenuContext);

  const removeSavedCity = (cityToRemove) => {
    setSavedCities(prev => prev.filter(city => city !== cityToRemove));
  }

  return (
    <div className="border-2 border-[#5578a400] w-60 bg-[#244779d8] absolute top-19 z-10 p-3 rounded-3xl min-h-[85%]">
        <button onClick={isOpen}>
          <Image src={'/menu/close.svg'} width={20} height={20} alt={''}></Image>
        </button>
      <h1 className="font-semibold text-2xl mt-3 text-white">Added Cities</h1>
      {savedCities.map((entry, index) => (
          <div key={index} onClick={() => setCurrentWeatherCity(entry)} className="rounded-2xl border-1 border-[#2a548788] w-full mt-4 weather cursor-pointer inline-flex justify-between items-start p-3">
            <div className="flex flex-col gap-3">
              <h2 className="font-light text-white">{entry.name}</h2>
              <h1 className="font-semibold text-4xl text-white">{entry.temperature}ºC</h1>
              <h3 className="font-light text-white">Máx. {entry.maxTemp}º Mín. {entry.minTemp}º</h3>
            </div>
          <button className="cursor-pointer" onClick={() => removeSavedCity(entry)}><Image src={'/menu/remove.svg'} width={15} height={20} alt={''}></Image></button>
        </div>
      ))}
    </div>
  );
}

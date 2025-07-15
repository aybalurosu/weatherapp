import Image from "next/image";
import { useContext, useEffect } from "react";
import { MenuContext } from "../MenuContext";

export default function Forecast() {

  const { latitude } = useContext(MenuContext);
  const { longitude } = useContext(MenuContext);

 useEffect(() => {
         if (!latitude && !longitude) return;
 
         async function fetchForecast() {
             try {
 
                 const data = await fetch(`/api/forecast?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}`, {
                     method: 'POST',
                     headers: {
                         "Content-Type": "application/json",
                     },
                 })
 
                const res = await data.json();

 
             } catch (error) {
                 console.error(error);
             }
         }
         fetchForecast();
     }, [latitude, longitude]);

  return (
    <div className="border-1 border-[#10386900] w-full p-4 rounded-2xl bg-[#10386953]">
      <h1 className="text-blue-300 font-medium pb-1 text-sm">NEXT 7 DAYS</h1>
      <div className="flex flex-col gap-2">
        <div className="border-b-1 border-b-blue-300 pt-1.5 pb-1.5 text-white font-medium">Tue</div>
        <div className="border-b-1 border-b-blue-300 pt-1.5 pb-1.5 text-white font-medium">Wedn</div>
        <div className="border-b-1 border-b-blue-300 pt-1.5 pb-1.5 text-white font-medium">Thu</div>
        <div className="border-b-1 border-b-blue-300 pt-1.5 pb-1.5 text-white font-medium">Fri</div>
        <div className="border-b-1 border-b-blue-300 pt-1.5 pb-1.5 text-white font-medium">Sat</div>
        <div className="border-b-1 border-b-blue-300 pt-1.5 pb-1.5 text-white font-medium">Sun</div>
        <div className="pt-1.5 pb-1.5 text-white font-medium">Mon</div>
      </div>
    </div>
  );
}

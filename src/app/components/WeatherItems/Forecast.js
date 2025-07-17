import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../MenuContext";

export default function Forecast() {

  const { latitude, longitude } = useContext(MenuContext);

  const [days, setDays] = useState(null);
  const [maxTemperature, setMaxTemperature] = useState(null);
  const [minTemperature, setMinTemperature] = useState(null);
  const [precipitationProbability, setPrecipitationProbability] = useState(null);

  
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
        setDays(res.forecastDetails.time);
        setMaxTemperature(res.forecastDetails.maxTemperature);
        setMinTemperature(res.forecastDetails.minTemperature);
        setPrecipitationProbability(res.forecastDetails.precipitationProbability);

      } catch (error) {
        console.error(error);
      }
    }
    fetchForecast();
  }, [latitude, longitude]);

  return (
    <div className="border-1 border-[#10386900] w-full p-4 rounded-2xl bg-[#10386953]">
      <h1 className="text-blue-300 font-medium pb-1 text-sm">NEXT 14 DAYS</h1>
      <div className="flex flex-col gap-2">
        {days?.slice(1).map((dateString, i) => (
          <div
            className="border-b-1 border-b-blue-300 pt-1.5 pb-1.5 text-white font-medium inline-flex justify-between"
            key={i}
          >
            <h1>{new Date(dateString).toLocaleDateString('en-US', { weekday: 'long' })}</h1>
            <div className="inline-flex gap-3">
              <h2>Max: {maxTemperature?.[i]}º</h2>
              <h2>Min: {minTemperature?.[i]}º</h2>
              <Image
                src={
                  Number(precipitationProbability?.[i]) >= 80
                    ? "/icons/rain-super.png"
                    : Number(precipitationProbability?.[i]) > 50
                      ? "/icons/rain-medium.png"
                    : Number(precipitationProbability?.[i]) > 20
                      ? "/icons/rain-light.png"
                      : "/icons/sun.png"
                }
                width={30}
                height={30}
                alt=""
              />
              {Number(precipitationProbability?.[i]) > 20 && (
                <h1>{precipitationProbability?.[i]}%</h1>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../MenuContext";

export default function Forecast() {
  const { latitude, longitude } = useContext(MenuContext);

  const [days, setDays] = useState(null);
  const [maxTemperature, setMaxTemperature] = useState(null);
  const [minTemperature, setMinTemperature] = useState(null);
  const [precipitationProbability, setPrecipitationProbability] =
    useState(null);

  useEffect(() => {
    if (!latitude && !longitude) return;

    async function fetchForecast() {
      try {
        const data = await fetch(
          `/api/forecast?latitude=${encodeURIComponent(
            latitude
          )}&longitude=${encodeURIComponent(longitude)}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const res = await data.json();
        setDays(res.forecastDetails.time);
        setMaxTemperature(res.forecastDetails.maxTemperature);
        setMinTemperature(res.forecastDetails.minTemperature);
        setPrecipitationProbability(
          res.forecastDetails.precipitationProbability
        );
      } catch (error) {
        console.error(error);
      }
    }
    fetchForecast();
  }, [latitude, longitude]);

  return (
    <div className="border-1 border-[#10386900] w-full p-3 rounded-2xl bg-[#244779d8]">
      <h1 className="text-blue-300 font-medium pb-2 text-sm">NEXT 7 DAYS</h1>
      <div className="flex flex-col gap-1">
        {days?.slice(1).map((dateString, i) => (
          <div
            className="border-t-1 pt-0.5 border-t-blue-300 text-white font-medium flex flex-col"
            key={i}
          >
            <h1 className="text-[#d4e5f7]">
              {new Date(dateString).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </h1>
            <div className="inline-flex items-center justify-between">
              <div className="inline-flex gap-2">
                <p className="font-light">{maxTemperature?.[i]}º</p>
                <p className="font-light">{minTemperature?.[i]}º</p>
              </div>
              <div className="inline-flex items-center gap-2">
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
                  <p className="font-light">{precipitationProbability?.[i]}%</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

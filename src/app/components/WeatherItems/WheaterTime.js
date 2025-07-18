import { useContext, useState, useEffect } from "react";
import { MenuContext } from "../MenuContext";
import Image from "next/image";

export default function WheaterTime() {

  const { latitude, longitude } = useContext(MenuContext)
  const { hourlyTemperature } = useContext(MenuContext);

  const [rain, setRain] = useState(null);
  const [cloudCover, setCloudCover] = useState(null);
  const [snowfall, setSnowfall] = useState(null);
  const [showers, setShowers] = useState(null);
  const [isDay, setIsDay] = useState(null);

  useEffect(() => {
    if (!latitude && !longitude) return;

    async function fetchForecast() {
      try {

        const data = await fetch(`/api/weatherday?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
        })

        const res = await data.json();
        setRain(res.weatherDay.rain);
        setCloudCover(res.weatherDay.cloudCover);
        setSnowfall(res.weatherDay.snowfall);
        setShowers(res.weatherDay.showers);
        setIsDay(res.weatherDay.isDay);

      } catch (error) {
        console.error(error);
      }
    }
    fetchForecast();
  }, [latitude, longitude]);

  return (
    <div className="border-1 border-[#10386900] w-full p-4 rounded-2xl bg-[#244779d8] h-28 scroll-hidden overflow-x-scroll">
      <div className="inline-flex items-center justify-center gap-4">
        {hourlyTemperature?.time.map((hour, i) => (
          <div key={i} className="flex flex-col items-center justify-center text-white font-medium">
            <div>{Number(hour.slice(11, 13))}h</div>
            <Image
              src={
                Number(rain?.[i]) >= 65
                ? "/icons/rain-super.png"
                : Number(cloudCover?.[i]) >= 70
                ? "/icons/cloud-cover.png"
                : Number(cloudCover?.[i]) >= 50
                ? "/icons/cloud.png"
                : Number(cloudCover?.[i]) >= 20 && Number(hour.slice(11, 13)) > 6 && Number(hour.slice(11, 13)) < 22
                ? "/icons/sun-cloudy.png"
                : Number(snowfall?.[i]) > 40
                ? "/icons/snow.png"
                : Number(showers?.[i]) > 0
                ? "/icons/rain-super.png"
                : Number(isDay?.[i]) === 0
                ? "/icons/night.png"
                : "/icons/sun.png"
              }
              width={30}
              height={30}
              alt=""
            />
            <div>{hourlyTemperature.temperature[i]}º</div>
          </div>
        ))}
      </div>
    </div>
  );
}

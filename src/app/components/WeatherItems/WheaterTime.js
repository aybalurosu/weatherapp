import { useContext, useState, useEffect } from "react";
import { MenuContext } from "../MenuContext";
import Image from "next/image";

export default function WheaterTime() {

  const { latitude, longitude } = useContext(MenuContext)
  const { hourlyTemperature } = useContext(MenuContext);

  const [rain, setRain] = useState(null);
  const [cloudCover, setCloudCover] = useState(null);
  const [cloudMid, setCloudMid] = useState(null);
  const [cloudLow, setCloudLow] = useState(null);
  const [snowfall, setSnowfall] = useState(null);
  const [showers, setShowers] = useState(null);

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
        setRain(res.weatherDay.rain);
        setCloudCover(res.weatherDay.cloudCover);
        setCloudMid(res.weatherDay.cloudMid);
        setCloudLow(res.weatherDay.cloudLow);
        setSnowfall(res.weatherDay.snowfall);
        setShowers(res.weatherDay.showers);

      } catch (error) {
        console.error(error);
      }
    }
    fetchForecast();
  }, [latitude, longitude]);

  return (
    <div className="border-1 border-[#10386900] w-full p-4 rounded-2xl bg-[#10386953] h-28 scroll-hidden overflow-x-auto">
      <div className="inline-flex items-center justify-center gap-4">
        {hourlyTemperature?.time.map((hour, i) => (
          <div key={i} className="flex flex-col items-center text-white font-medium">
            <div>{Number(hour.slice(11, 13))}h</div>
            {/* <Image
              src={
                Number(rain?.[i]) >= 65
                  ? "/icons/rain-super.png"
                  : Number(precipitationProbability?.[i]) > 30
                    ? "/icons/rain-medium.png"
                    : "/icons/sun.png"
              }
              width={30}
              height={30}
              alt=""
            /> */}
            <Image src={'/icons/sun.png'} width={27} height={30} alt=""></Image>
            <div>{hourlyTemperature.temperature[i]}º</div>
          </div>
        ))}
      </div>
    </div>
  );
}

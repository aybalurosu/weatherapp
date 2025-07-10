import Forecast from "./WeatherItems/Forecast";
import UVIndex from "./WeatherItems/UVIndex";
import WheaterTime from "./WeatherItems/WheaterTime";
import Humidity from "./WeatherItems/Humidity";
import Wind from "./WeatherItems/Wind";

import React from "react";
import AirQuality from "./WeatherItems/AirQuality";

const MainInfo = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="city-wheater flex flex-col items-center p-7">
        <h2 className="text-2xl text-white font-light">Barcelona</h2>
        <h1 className="text-7xl text-white font-light">32º</h1>
        <p className="text-xl text-white font-light">Soleado</p>
        <p className="text-xl text-white font-light">Máx. 33º Mín. 26º</p>
      </div>
      <div className="p-3 flex flex-col gap-4">
        <WheaterTime />
        <Forecast />
        <div className="p-3 flex flex-row flex-wrap gap-3">
          <AirQuality />
          <UVIndex />
          <Humidity />
          <Wind />
        </div>
      </div>
    </div>
  );
});

export default MainInfo;

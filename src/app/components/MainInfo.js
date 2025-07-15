import Forecast from "./WeatherItems/Forecast";
import UVIndex from "./WeatherItems/UVIndex";
import WheaterTime from "./WeatherItems/WheaterTime";
import Humidity from "./WeatherItems/Humidity";
import Wind from "./WeatherItems/Wind";

import React from "react";
import { MenuContext } from "./MenuContext";

const MainInfo = React.forwardRef((props, ref) => {

  const { currentWeatherCity } = React.useContext(MenuContext);
  return (
    <div ref={ref}>
      <div className="city-wheater flex flex-col items-center p-7">
        <h2 className="text-2xl text-white font-light">{currentWeatherCity?.name}</h2>
        <h1 className="text-7xl text-white font-light">{currentWeatherCity?.temperature}º</h1>
        <p className="text-xl text-white font-light">Máx. {currentWeatherCity?.maxTemp}º Mín. {currentWeatherCity?.minTemp}º</p>
      </div>
      <div className="p-3 flex flex-col gap-4">
        <WheaterTime />
        <div className="inline-flex gap-5">
          <Forecast />
          <div className="flex flex-col gap-3">
            <UVIndex />
            <Humidity />
            <Wind />
          </div>
        </div>
      </div>
    </div>
  );
});

export default MainInfo;

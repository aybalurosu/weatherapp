import Alert from "./Alert";
import Forecast from "./Forecast";
import UVIndex from "./UVIndex";
import WheaterTime from "./WheaterTime";
import Humidity from "./Humidity";
import Sensation from "./Sensation";
import Wind from "./Wind";
import Sunset from "./Sunset";
import Polen from "./Polen";

import React from "react";

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
        <Alert />
        <Forecast />
        <div>
          <h1 className="text-xl pl-3 text-white font-medium">Weather Details</h1>
          <div className="p-3 flex flex-row flex-wrap gap-4">
            <UVIndex />
            <Sunset />
            <Humidity />
            <Sensation />
            <Polen />
            <Wind />
          </div>
        </div>
      </div>
    </div>
  );
});

export default MainInfo;

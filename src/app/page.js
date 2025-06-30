import Image from "next/image";
import WheaterTime from "./components/WheaterTime";
import Forecast from "./components/Forecast";
import Alert from "./components/Alert";
import UVIndex from "./components/UVIndex";
import Sunset from "./components/Sunset";
import Humidity from "./components/Humidity";
import Sensation from "./components/Sensation";
import Polen from "./components/Polen";
import Wind from "./components/Wind";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="weather p-4 flex flex-col justify-center items-center">
      <Navbar></Navbar>
      <div className="city-wheater flex flex-col items-center p-7">
        <h2 className="text-2xl text-white font-light">Barcelona</h2>
        <h1 className="text-7xl text-white font-light">32º</h1>
        <p className="text-xl text-white font-light">Soleado</p>
        <p className="text-xl text-white font-light">Máx. 33º Mín. 26º</p>
      </div>
      <div className="p-3 flex flex-col gap-4">
        <WheaterTime></WheaterTime>
        <Alert></Alert>
        <Forecast></Forecast>
        <div>
          <h1 className="text-xl pl-3 text-white">Weather Details</h1>
          <div className="p-3 flex flex-row flex-wrap gap-4">
            <UVIndex></UVIndex>
            <Sunset></Sunset>
            <Humidity></Humidity>
            <Sensation></Sensation>
            <Polen></Polen>
            <Wind></Wind>
          </div>
        </div> 
      </div>
    </div>
  );
}

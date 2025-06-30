import Image from "next/image";

export default function Forecast() {
  return (
    <div className="border-1 border-[#10386900] w-full p-4 rounded-2xl bg-[#10386953]">
      <h1 className="text-blue-300 font-medium pb-1 text-sm">10-DAY FORECAST</h1>
      <div className="flex flex-col gap-2">
        <div className="border-b-1 border-b-blue-300 pt-1.5 pb-1.5 text-white font-medium">Today</div>
        <div className="border-b-1 border-b-blue-300 pt-1.5 pb-1.5 text-white font-medium">Tue</div>
        <div className="border-b-1 border-b-blue-300 pt-1.5 pb-1.5 text-white font-medium">Wedn</div>
        <div className="border-b-1 border-b-blue-300 pt-1.5 pb-1.5 text-white font-medium">Thu</div>
        <div className="border-b-1 border-b-blue-300 pt-1.5 pb-1.5 text-white font-medium">Fri</div>
        <div className="border-b-1 border-b-blue-300 pt-1.5 pb-1.5 text-white font-medium">Sat</div>
        <div className="pt-1.5 pb-1.5 text-white font-medium">Sun</div>
      </div>
    </div>
  );
}

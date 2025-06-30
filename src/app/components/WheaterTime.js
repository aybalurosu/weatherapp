import Image from "next/image";

export default function WheaterTime() {
  return (
    <div className="border-1 border-[#10386900] w-full p-4 rounded-2xl bg-[#10386953]">
      <div className="flex flex-col gap-3.5">
        <div className="flex flex-row justify-between">
          <button className="text-blue-200 font-medium">Today</button>
          <button className="text-blue-200 font-medium">Tomorrow</button>
          <button className="text-blue-200 font-medium">Next 7 days</button>
        </div>
        <div className="flex flex-row gap-6">
          <div className="text-white font-medium">Now</div>
          <div className="text-white font-medium">15</div>
          <div className="text-white font-medium">16</div>
          <div className="text-white font-medium">17</div>
          <div className="text-white font-medium">18</div>
          <div className="text-white font-medium">19</div>
          <div className="text-white font-medium">20</div>
          <div className="text-white font-medium">21</div>
          <div className="text-white font-medium">22</div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Alert() {
  return (
    <div className="border-1 border-[#10386900] w-full p-4 rounded-2xl bg-[#10386953]">
      <h2 className="text-blue-300 font-medium text-sm pb-1">METEROLOGICALS ALERTS</h2>
      <div>
        <h1 className="text-white font-medium text-lg">Clima adverso</h1>
        <p className="text-white">Lorem ipsum</p>
        <p className="text-blue-300 text-xs pt-2">AEMET. Agencia Estatal de Metereología</p>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Menu({ isOpen }) {

  return (
    <div className="border-2 border-[#a9b9cd00] w-80 h-full bg-[#7799c4] absolute top-0 left-0 p-4 z-10 rounded-tr-4xl">
      <button onClick={isOpen} className="rounded-full border-1 border-[#02204500] bg-[#0220454a] p-2">
        <Image src={'/menu/close.png'} width={35} height={35} alt={''}></Image>
      </button>
      <h1>hello</h1>
    </div>
  );
}

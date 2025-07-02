import Image from "next/image";

export default function Menu({ isOpen }) {

  return (
    <div className="border-2 border-[#5579A4] w-72 h-full bg-[#5579A4] absolute top-0 left-0 p-4 z-10 rounded-tr-4xl">
      <button onClick={isOpen}>
        <Image src={'/menu/close.svg'} width={20} height={20} alt={''}></Image>
      </button>
      <h1>hello</h1>
    </div>
  );
}

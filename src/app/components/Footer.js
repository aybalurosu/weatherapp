import Image from "next/image";

export default function Footer({ openPopover }) {

  return (
    <div className="border-2 border-[#5579A4] w-full bg-[#5579A4] p-4 rounded-tr-4xl rounded-tl-4xl
    inline-flex justify-around items-center h-full">
      <button className="outline-0" variant="contained" onClick={(e) => openPopover(e.currentTarget)}><Image src={'/footer/settings.svg'} width={23} height={23} alt=""></Image></button>
    </div>
  );
}

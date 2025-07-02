import Image from "next/image";

export default function Footer() {

  return (
    <div className="border-2 border-[#5579A4] w-full h-16 bg-[#5579A4] p-4 rounded-tr-4xl rounded-tl-4xl
    inline-flex justify-around items-center">
      <Image src={'/footer/maps-location.svg'} width={25} height={25} alt=""></Image>
      <div className="carosuel-sliders inline-flex gap-2">
        <div className="rounded-full bg-white w-1.5 h-1.5"></div>
        <div className="rounded-full bg-white w-1.5 h-1.5"></div>
        <div className="rounded-full bg-white w-1.5 h-1.5"></div>
        <div className="rounded-full bg-white w-1.5 h-1.5"></div>
        <div className="rounded-full bg-white w-1.5 h-1.5"></div>
      </div>
      <Image src={'/footer/settings.svg'} width={23} height={23} alt=""></Image>
    </div>
  );
}

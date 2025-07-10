import Image from "next/image";
import bindTrigger from 'material-ui-popup-state';

export default function Footer({handleOpen, openPopover }) {

  return (
    <div className="border-2 border-[#5579A4] w-full h-16 bg-[#5579A4] p-4 rounded-tr-4xl rounded-tl-4xl
    inline-flex justify-around items-center">
     <button className="outline-0" onClick={handleOpen}><Image src={'/footer/maps-location.svg'} width={25} height={25} alt=""></Image></button>
      <button className="outline-0" variant="contained" onClick={(e) => openPopover(e.currentTarget)}><Image src={'/footer/settings.svg'} width={23} height={23} alt=""></Image></button>
    </div>
  );
}

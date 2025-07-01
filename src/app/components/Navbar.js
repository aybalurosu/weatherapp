'use client';

import Image from "next/image";
import { useState } from "react";
import Menu from "./Menu";

export default function Navbar({isOpen}) {

  return (
    <div className="w-full flex justify-between">
      <button onClick={isOpen} className="rounded-full border-1 border-[#02204500] bg-[#0220454a] p-2"><Image src={'/menu/sidenav.png'} width={35} height={35} alt={''}></Image></button>
      <button className="rounded-full border-1 border-[#02204500] bg-[#0220454a] p-2"><Image src={'/menu/add.png'} width={35} height={35} alt={''}></Image></button>
    </div>
  );
}

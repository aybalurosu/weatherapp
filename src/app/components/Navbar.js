'use client';

import Image from "next/image";
import { useState } from "react";
import Menu from "./Menu";

export default function Navbar({isOpen, handleOpen}) {

  return (
    <div className="w-full flex justify-between">
      <button onClick={isOpen}><Image src={'/menu/sidebar.svg'} width={23} height={23} alt={''}></Image></button>
      <button onClick={handleOpen}><Image src={'/components/navbar/search.svg'} width={23} height={23} alt={''}></Image></button>
    </div>
  );
}

'use client';

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

import { useState, useRef, useEffect } from "react";
import MainInfo from "./components/MainInfo";
import Footer from "./components/Footer";


export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      if (isOpen) {
        // Remove the animation class to reset
        divRef.current.classList.remove('anim-slide-content');

        // Trigger a reflow — forcing the browser to notice the class was removed
        void divRef.current.offsetWidth;

        // Add the animation class again to replay animation
        divRef.current.classList.add('anim-slide-content');

        // Also remove the "remove" class if you have it
        divRef.current.classList.remove('remove-anim-slide-content');
      } else {
        divRef.current.classList.add('remove-anim-slide-content');
        divRef.current.classList.remove('anim-slide-content');
      }
    }
  }, [isOpen]);

  return (
    <div className="weather">
      <div className="p-4">
        <Navbar isOpen={() => setIsOpen(open => !open)}></Navbar>
        {isOpen && <Menu isOpen={() => setIsOpen(open => !open)}/>}

        <MainInfo ref={divRef}></MainInfo>
      </div>
      <Footer></Footer>
    </div>
  );
}

'use client';

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

import { useState, useRef, useEffect } from "react";
import MainInfo from "./components/MainInfo";
import Search from "./components/Modals/ModalChilds/Search";
import CityWeather from "./components/Modals/ModalChilds/CityWeather";
import { CityContext } from "./components/Modals/ModalChilds/CityContext";
import { MenuProvider } from "./components/MenuContext";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const isOpenMenu = () => setIsOpen(open => !open);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openCity, setOpenCity] = useState(false)
  const handleOpenCity = () => setOpenCity(true);
  const handleCloseCity = () => setOpenCity(false);

  useEffect(() => {
    if (openCity) {
      setOpen(false);
    }
  });

  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      if (isOpen) {
        // Remove the animation class to reset
        divRef.current.classList.remove('anim-slide-content');
        void divRef.current.offsetWidth;
        divRef.current.classList.add('anim-slide-content');
        divRef.current.classList.remove('remove-anim-slide-content');
      } else {
        divRef.current.classList.add('remove-anim-slide-content');
        divRef.current.classList.remove('anim-slide-content');
      }
    }
  }, [isOpen]);

  const [typedCity, setTypedCity] = useState(null);

  return (
    <div className="border-4 border-white rounded-4xl p-3 bg-black">
        <div className="weather w-90 rounded-3xl h-200 scroll-hidden overflow-y-scroll">
          <MenuProvider>
            <div> 
              <Navbar isOpen={isOpenMenu} handleOpen={handleOpen}></Navbar>
              {isOpen && <Menu isOpen={() => setIsOpen(open => !open)} />}
            </div>
            <div>
                {/* open modal */}
                <CityContext.Provider value={{ typedCity, setTypedCity }}>
                  <MainInfo ref={divRef}></MainInfo>
                  <Search open={open} onClose={handleClose} handleOpenCity={handleOpenCity}></Search>
                  <CityWeather open={openCity} onClose={handleCloseCity}></CityWeather>
                </CityContext.Provider>
            </div>
          </MenuProvider>
      </div>
    </div>
  );
}

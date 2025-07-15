'use client';

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

import { useState, useRef, useEffect } from "react";
import MainInfo from "./components/MainInfo";
import Footer from "./components/Footer";
import Search from "./components/Modals/ModalChilds/Search";
import PopoverSettings from "./components/Popover/PopoverSettings";
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

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopover = (element) => {
    setAnchorEl(element);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const [typedCity, setTypedCity] = useState(null);

  return (
    <div className="weather h-full">
      <MenuProvider>
        <header className="p-4"> 
          <Navbar isOpen={isOpenMenu} handleOpen={handleOpen}></Navbar>
          {isOpen && <Menu isOpen={() => setIsOpen(open => !open)} />}
        </header>
        <main>
          <div className="p-4">
            {/* open modal */}
            <CityContext.Provider value={{ typedCity, setTypedCity }}>
              <MainInfo ref={divRef}></MainInfo>
              <Search open={open} onClose={handleClose} handleOpenCity={handleOpenCity}></Search>
              <CityWeather open={openCity} onClose={handleCloseCity}></CityWeather>
            </CityContext.Provider>
          </div>
        </main>
        <footer>
          <Footer openPopover={handleOpenPopover}></Footer>
          <PopoverSettings anchorEl={anchorEl} onClose={handleClosePopover} />
        </footer>
      </MenuProvider>
    </div>
  );
}

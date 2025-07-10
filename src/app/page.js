'use client';

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

import { useState, useRef, useEffect } from "react";
import MainInfo from "./components/MainInfo";
import Footer from "./components/Footer";
import Search from "./components/Modals/ModalChilds/Search";
import Maps from "./components/Modals/ModalChilds/Maps";
import PopoverSettings from "./components/Popover/PopoverSettings";
import CityWeather from "./components/Modals/ModalChilds/CityWeather";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const isOpenMenu = () => setIsOpen(open => !open);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openMaps, setOpenMaps] = useState(false)
  const handleOpenMaps = () => setOpenMaps(true);
  const handleCloseMaps = () => setOpenMaps(false);

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

  return (
    <div className="weather h-full">
      <div className="pt-4 pr-4 pl-4 pb-1">
        <Navbar isOpen={isOpenMenu} handleOpen={handleOpen}></Navbar>
        {isOpen && <Menu isOpen={() => setIsOpen(open => !open)}/>}
        <MainInfo ref={divRef}></MainInfo>

        {/* open modal */}
        <Search open={open} onClose={handleClose} handleOpenCity={handleOpenCity}></Search>
        <Maps open={openMaps} onClose={handleCloseMaps}></Maps>
        <CityWeather open={openCity} onClose={handleCloseCity}></CityWeather>
      </div>
      <Footer handleOpen={handleOpenMaps} openPopover={handleOpenPopover}></Footer>
      <PopoverSettings anchorEl={anchorEl} onClose={handleClosePopover} />
    </div>

  );
}

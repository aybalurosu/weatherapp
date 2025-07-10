import * as React from 'react';
import Image from "next/image";
import { ModalParent } from "../ModalParent";
import { Box } from '@mui/material';
import WheaterTime from "../../WeatherItems/WheaterTime";

export default function CityWeather({ open, handleCloseCity, onClose, addCity, cityValue}) {

    const [city, setCity] = React.useState('');

    // React.useEffect(() => {
    //     if (!city) return;

    //     const delayDebounce = setTimeout(
    //         async () => {
    //             const data = await fetch(`/api/search?name=${encodeURIComponent(cityValue)}`, {
    //                 method: 'POST',
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 }
    //             });

    //             const res = await data.json();
    //             setResults(res.name);

    //         }, 600);

    //     return () => clearTimeout(delayDebounce);

    // }, [city]);

    return ( 
        <div>
            <ModalParent open={open} onClose={handleCloseCity}>
                <Box className={`fixed top-24 left-1/2 z-50 transform -translate-x-1/2 
                 weather p-6 rounded-xl shadow-xl min-w-[87%] max-w-full transition-all duration-200 ease-in-out
                 ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                `}>
                    <div className='flex flex-row justify-between items-center mb-5'>
                        <button onClick={addCity}><Image src={'/modals/add.svg'} width={20} height={20} alt=''></Image></button>
                        <button onClick={onClose}><Image src={'/menu/close.svg'} width={20} height={20} alt=''></Image></button>
                    </div>
                    <div className="city-wheater flex flex-col items-center p-7">
                        <h2 className="text-2xl text-white font-light">{}</h2>
                        <h1 className="text-7xl text-white font-light">32º</h1>
                        <p className="text-xl text-white font-light">Soleado</p>
                        <p className="text-xl text-white font-light">Máx. 33º Mín. 26º</p>
                    </div>
                    <WheaterTime />
                </Box>
            </ModalParent>
        </div>
    )
}
import * as React from 'react';
import Image from "next/image";
import { ModalParent } from "../ModalParent";
import { Box } from '@mui/material';
import { CityContext } from './CityContext';
import { MenuContext } from '../../MenuContext';

export default function CityWeather({ open, handleCloseCity, onClose}) {

    const {typedCity} = React.useContext(CityContext);
    const [currentForecast, setCurrentForecast] = React.useState(null);
    const [minTemperature, setMinTemperature] = React.useState(null);
    const [maxTemperature, setMaxTemperature] = React.useState(null);    

    React.useEffect(() => {
        if (!typedCity) return;

        async function fetchData() {
            try {

                const data = await fetch(`/api/forecast?latitude=${encodeURIComponent(typedCity.latitude)}&longitude=${encodeURIComponent(typedCity.longitude)}`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

                const res = await data.json();
                setCurrentForecast(res.currentWeather);

                let temperatureResults = res.temperature_2m;

                const numericArray = temperatureResults.map(Number);

                setMinTemperature(Math.min(...numericArray));
                setMaxTemperature(Math.max(...numericArray));


            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [typedCity]);

    const { addCity } = React.useContext(MenuContext);

    const handleAddCityAndWeather = () => {
        if (!typedCity || !currentForecast) return;

         const newCityWeather = {
            name: typedCity.name,
            temperature: Number(currentForecast.currentTemperature).toFixed(0),
            minTemp: Number(minTemperature).toFixed(0),
            maxTemp: Number(maxTemperature).toFixed(0),
        };
        
        addCity(newCityWeather);
        handleCloseCity();
    }

    return (
        <div>
            <ModalParent open={open} onClose={handleCloseCity}>
                <Box className={`fixed top-24 left-1/2 z-50 transform -translate-x-1/2 
                 weather p-6 rounded-xl shadow-xl min-w-[50%] max-w-52 transition-all duration-200 ease-in-out
                 ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                `}>
                    <div className='flex flex-row justify-between items-center mb-5'>
                        <button onClick={handleAddCityAndWeather}><Image src={'/modals/add.svg'} width={20} height={20} alt=''></Image></button>
                        <button onClick={onClose}><Image src={'/menu/close.svg'} width={20} height={20} alt=''></Image></button>
                    </div>
                    <div className="city-wheater flex flex-col items-center justify-center p-7">
                        <h2 className="text-2xl text-white font-light">{typedCity?.name}</h2>
                        <h1 className="text-7xl text-white font-light">{Number(currentForecast?.currentTemperature).toFixed(0)}º</h1>
                        <p className="text-xl text-white font-light">Máx. {Number(maxTemperature).toFixed(0)}º Mín. {Number(minTemperature).toFixed(0)}º</p>
                    </div>
                </Box>
            </ModalParent>
        </div>
    )
}
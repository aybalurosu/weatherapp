
import { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {

    const [savedCities, setSavedCities] = useState([]);
    const [currentWeatherCity, setCurrentWeatherCity] = useState(null);
    const [temperatureExtrems, setTemperatureExtrems] = useState(null);

    const addCity = (weatherObj) => {
        setSavedCities((prev)=> [...prev, weatherObj]);
        setCurrentWeatherCity(weatherObj);
    }

    return (
        <MenuContext.Provider value={{savedCities, setSavedCities, addCity, currentWeatherCity, setCurrentWeatherCity, temperatureExtrems, setTemperatureExtrems}}>
            {children}
        </MenuContext.Provider>
    )
}
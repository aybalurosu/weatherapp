
import { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {

    const [savedCities, setSavedCities] = useState([]);
    const [currentWeatherCity, setCurrentWeatherCity] = useState(null);
    const [temperatureExtrems, setTemperatureExtrems] = useState(null);
    const [hourlyTemperature, setHourlyTemperature] = useState(null);

    const [windSpeed, setWindSpeed] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [uvIndex, setUvIndex] = useState(null);

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const addCity = (weatherObj) => {
        setSavedCities((prev) => [...prev, weatherObj]);
        setCurrentWeatherCity(weatherObj);
    }

    const weatherTime = (weatherObj) => {
        setHourlyTemperature(weatherObj);
    }

    const windDetail = (windObj) => {
        setWindSpeed(windObj);
    }

    const humidityDetail = (humidityObj) => {
        setHumidity(humidityObj);
    }

    const uvIndexDetail = (uvIndexObj) => {
        setUvIndex(uvIndexObj);
    }

    const latitudeAndLongitudeDetails = (lat, long) => {
        setLatitude(lat);
        setLongitude(long);
    }

    return (
        <MenuContext.Provider value={{
            savedCities, setSavedCities, addCity,
            currentWeatherCity, setCurrentWeatherCity,
            temperatureExtrems, setTemperatureExtrems, weatherTime,
            hourlyTemperature, setHourlyTemperature,
            windDetail, windSpeed, setWindSpeed,
            humidityDetail, humidity, setHumidity,
            uvIndexDetail, uvIndex, setUvIndex,
            latitudeAndLongitudeDetails, latitude,
            setLatitude, longitude, setLongitude
        }}>
            {children}
        </MenuContext.Provider>
    )
}
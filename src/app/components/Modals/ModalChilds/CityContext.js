
import { createContext, useState } from 'react';

export const CityContext = createContext();

export const CityProvider = ({children}) => {

    const [typedCity, setTypedCity] = useState(null);

    return (
        <CityContext.Provider value={{ typedCity, setTypedCity}}>
            {children}
        </CityContext.Provider>
    )

}
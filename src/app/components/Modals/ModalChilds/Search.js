import * as React from 'react';
import { ModalParent } from '../ModalParent';
import { Box } from '@mui/material';
import Image from 'next/image';
import { CityContext } from './CityContext';


export default function Search({ open, handleClose, onClose, handleOpenCity }) {

    const [city, setCity] = React.useState('');
    const [results, setResults] = React.useState([]);

    React.useEffect(() => {
        if (!city) return;

        const delayDebounce = setTimeout(
            async () => {
                const data = await fetch(`/api/search?name=${encodeURIComponent(city)}`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                const res = await data.json();
                setResults(res);

            }, 600);

        return () => clearTimeout(delayDebounce);

    }, [city]);

    const { setTypedCity } = React.useContext(CityContext);

    const handleCitySelect = (city) => {
        setTypedCity(city);
        handleOpenCity();
    };

    return (
        <div>
            <ModalParent open={open} onClose={handleClose}>
                <Box className={`fixed top-40 left-1/2 z-10 transform -translate-x-1/2 
                bg-white rounded-xl shadow-xl min-w-[40px] transition-all duration-200 ease-in-out
                ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                `}>
                    <div className='p-6 pb-3'>
                        <div className='flex flex-row justify-between items-center mb-5'>
                            <h1 className='font-medium text-2xl'>Search city</h1>
                            <button onClick={onClose}><Image src={'/modals/close-dark.svg'} width={20} height={20} alt=''></Image></button>
                        </div>
                        <div className="bg-[#c4c5cfbd] p-3 rounded-3xl inline-flex gap-3 w-full mb-5">
                            <Image src={'/modals/search.svg'} width={18} height={18} alt=''></Image>
                            <input className="outline-0 text-[#505158]"
                                placeholder="Search..." value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-6.5 h-96'>
                        <h1 className='font-medium text-xl pl-6 pt-0'>Search History</h1>
                        <div className='flex flex-col scroll-hidden overflow-y-scroll'>
                            {results.map((r, i) => (
                                <div key={i} className="inline-flex justify-between text-bs hover:bg-[#c7d6e894] pl-6 pr-6 transition-all rounded-xl">
                                    <button onClick={() => {handleCitySelect(r)}} className="pb-4 flex flex-col items-start cursor-pointer">
                                        <h3 className='text-lg font-medium text-[#143052f9]'>{r.name}</h3>
                                        <p className='text-sm'>{r.country}, {r.region}</p>
                                    </button>
                                    <Image src={'/modals/history.svg'} width={23} height={23} alt=''></Image>
                                </div>
                            ))}
                        </div>
                    </div>
                </Box>
            </ModalParent>
        </div>
    )
} 
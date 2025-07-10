import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function PopoverSettings({ anchorEl, onClose }) {
    const open = Boolean(anchorEl);

    return (
        <Popover open={open} anchorEl={anchorEl} onClose={onClose} anchorOrigin={{vertical: 'top',
            horizontal: 'left',}} transformOrigin={{vertical: 'bottom', horizontal: 'left',}}
            slotProps={{
                paper: {
                sx: {
                    bgcolor: '#151d2dd8',
                    borderRadius: 2,
                    boxShadow: 10,
                },
                },
            }}>
            <div className='flex flex-col items-start'>
                <div className='p-2 border-3 border-b-[#151d30] border-transparent w-full hover:bg-[#495b7b] transition-all'>
                    <button className="font-semibold text-[#b5ced2]">Celsius º</button>
                </div> 
                <div className='p-2 border-3 border-b-[#151d30] border-transparent w-full hover:bg-[#495b7b] transition-all'>
                    <button className="font-semibold text-[#b5ced2]">Farenheit F</button>
                </div> 
                {/* dark, light or system theme */}
                <div className='p-2 border-3 border-b-[#151d30] border-transparent w-full hover:bg-[#495b7b] transition-all'>
                    <button className="font-semibold text-[#b5ced2]">Theme</button>
                </div>
            </div>
        </Popover>
    );
}

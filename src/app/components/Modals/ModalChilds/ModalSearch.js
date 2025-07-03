import * as React from 'react';
import { ModalParent } from '../ModalParent';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';

export default function ModalSearch ({open, handleClose, onClose}) {

    return (
        <div>
            <ModalParent open={open} onClose={handleClose}>
                <Box className={`fixed top-24 left-1/2 z-50 transform -translate-x-1/2 
                bg-white p-6 rounded-xl shadow-xl min-w-[87%] max-w-full transition-all duration-200 ease-in-out
                ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                `}>
                    <div className='flex flex-row justify-between items-center mb-5'>
                        <h1 className='font-medium text-2xl'>Search city</h1>
                        <button onClick={onClose}><Image src={'/modals/close-dark.svg'} width={20} height={20} alt=''></Image></button>
                    </div>
                    <div className="bg-[#c4c5cfbd] p-3 rounded-3xl inline-flex gap-3 w-full mb-5">
                        <Image src={'/modals/search.svg'} width={18} height={18} alt=''></Image>
                        <input className="outline-0 text-[#505158]" placeholder="Search..."></input>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium text-lg'>Search History</h1>
                        <div className="history-search inline-flex justify-between text-bs">
                            <p>Bulgaria</p> 
                            <Image src={'/modals/history.svg'} width={23} height={23} alt=''></Image>
                        </div>
                    </div>
                </Box>
            </ModalParent>
        </div>
    )
} 
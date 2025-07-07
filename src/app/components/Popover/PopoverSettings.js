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
                    bgcolor: '#6b6b6ba8',
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 10,
                },
                },
            }}>
            <div className='flex flex-col'>
                <Button>Setting 1</Button>
                <Button>Setting 2</Button>
                <Button>Setting 3</Button>
                <Button>Setting 4</Button>
                <Button>Setting 5</Button>
                <Button>Setting 6</Button>
            </div>
        </Popover>
    );
}

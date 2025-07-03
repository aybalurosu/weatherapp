import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { bindPopover } from 'material-ui-popup-state';

export default function PopoverSettings({ anchorEl, onClose }) {
    const open = Boolean(anchorEl);

    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
        >

        </Popover>
    );
}

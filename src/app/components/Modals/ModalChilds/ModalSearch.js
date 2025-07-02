import * as React from 'react';
import { ModalParent } from '../ModalParent';
import { Typography } from '@mui/material';
import Image from 'next/image';

export default function ModalSearch ({open, handleClose, onClose}) {

    return (
        <div>
            <ModalParent open={open} onClose={handleClose}>
                <button onClick={onClose}><Image src={'/menu/close.svg'} width={20} height={20} alt=''></Image></button>
              <Typography>Hellooo</Typography>
            </ModalParent>
        </div>
    )
} 
import * as React from 'react';
import { Modal, Box } from '@mui/material';

export function ModalParent ({open, handleClose, children}) {
    
    return (
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                {/* modal content */}
                {children}
            </Modal>
        </div>
    )
} 
import * as React from 'react';
import { Modal, Box } from '@mui/material';

export function ModalParent ({open, handleClose, children}) {
    
    return (
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box className="w-64 h-44 rounded-2xl bg-amber-50">
                    {/* modal content */}
                    {children}
                </Box>
            </Modal>
        </div>
    )
} 
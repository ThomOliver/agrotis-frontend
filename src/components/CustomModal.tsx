import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box
} from '@mui/material';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ open, onClose, title, children }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ bgcolor: '#00796b', color: '#fff' }}>{title}</DialogTitle>
      <DialogContent>
        <Box minHeight="sm" sx={{padding:2}} >{children}</Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'flex-end', bgcolor: '#f4f2f1' }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{ bgcolor: '#009688', '&:hover': { bgcolor: '#00796b' } }}
        >
          FECHAR
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;

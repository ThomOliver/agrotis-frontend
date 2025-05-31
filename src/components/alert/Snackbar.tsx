import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  open: boolean;
  onClose: () => void;
  message: string;
}

const CustomAlert = React.forwardRef<HTMLDivElement, any>(function CustomAlert(
  props,
  ref
) {
  return (
    <MuiAlert
      elevation={6}
      ref={ref}
      variant="filled"
      icon={<CheckCircleIcon fontSize="inherit" />}
      {...props}
    />
  );
});

export default function SnackbarSucess({ open, onClose, message }: Props) {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{
        position: 'absolute',
        width: '90%'
      }}
    >
      <CustomAlert
        onClose={onClose}
        severity="success"
        sx={{
          width: '100%',
          backgroundColor: '#4caf50',
          color: '#fff',
        }}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        {message}
      </CustomAlert>
    </Snackbar>
  );
}

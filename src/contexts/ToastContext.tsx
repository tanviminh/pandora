import { Alert, AlertColor, AlertTitle, Snackbar } from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';

export type ToastType = AlertColor;

interface ToastContextProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setMessage: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<ToastType>>;
}

const ToastContext = React.createContext<ToastContextProps>({
  setOpen: () => null,
  setMessage: () => null,
  setType: () => null,
});

const ToastContextProvider: React.FC = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<ToastType>('success');

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <ToastContext.Provider value={{ setOpen, setMessage, setType }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert variant="filled" onClose={handleClose} severity={type} sx={{ width: '100%' }}>
          <AlertTitle>{type.toLocaleUpperCase()}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastContextProvider };

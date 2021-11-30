/* eslint-disable no-unused-vars */
import { CloseOutlined } from '@mui/icons-material';
import { Dialog, DialogTitle, IconButton, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';

//#region Styled

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseOutlined />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

//#endregion

interface ModalContextProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setTitle: Dispatch<SetStateAction<string>>;
  modalNode: React.ReactNode;
  setModalNode: Dispatch<SetStateAction<React.ReactNode>>;
}
const ModalContext = React.createContext<ModalContextProps>({
  setOpen: () => null,
  modalNode: null,
  setModalNode: () => null,
  setTitle: () => null,
});

const ModalContextProvider: React.FC = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [modalNode, setModalNode] = useState<React.ReactNode>(null);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <ModalContext.Provider value={{ modalNode, setOpen, setModalNode, setTitle }}>
      {children}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-video" aria-describedby="modal-video">
        <>{modalNode}</>
      </Modal>

      {/* <BootstrapDialog
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Stack sx={{ px: 4, pt: 4 }}>
            <Subtle>{title}</Subtle>
          </Stack>
        </BootstrapDialogTitle>
        <DialogContent sx={{ p: 10 }}>
          <Stack sx={{ p: 4 }}>{modalNode}</Stack>
        </DialogContent>
        <DialogActions>
          <Stack alignItems="center" justifyContent="center" sx={{ p: 4 }}>
            <Button variant="outlined" size="large" onClick={handleClose}>
              Close
            </Button>
          </Stack>
        </DialogActions>
      </BootstrapDialog> */}
    </ModalContext.Provider>
  );
};

export { ModalContextProvider, ModalContext };

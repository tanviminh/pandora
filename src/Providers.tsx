import { ModalContextProvider } from 'contexts/ModalContext';
import ThemeContext from 'contexts/ThemeContext';
import { ToastContextProvider } from 'contexts/ToastContext';
import React from 'react';
const Providers: React.FC = ({ children }) => {
  return (
    <ThemeContext>
      <ToastContextProvider>
        <ModalContextProvider>{children}</ModalContextProvider>
      </ToastContextProvider>
    </ThemeContext>
  );
};

export default Providers;

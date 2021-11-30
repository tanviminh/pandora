import { ThemeOptions, ThemeProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import React from 'react';

const styles: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      light: '#fdcf80',
      main: '#f6b545',
      dark: '#b17001',
    },
    secondary: {
      main: '#3cddaa',
    },
    divider: '#373e52',
    background: {
      default: '#2a2935',
      paper: '#111121',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffffCC',
      disabled: '#a2a2a2',
    },
  },
  spacing: 4,
  typography: {
    fontFamily: 'Colaborate',
    allVariants: {
      color: '#ffffff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Colaborate';
        font-weight: normal;
        src: url('/fonts/Colaborate-Regular.otf');
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Colaborate';
        font-weight: bold;
        src: url('/fonts/Colaborate-Bold.otf');
        font-display: swap;
      }
      `,
    },
  },
};

const ThemeContext: React.FC = ({ children }) => {
  const theme = React.useMemo(() => responsiveFontSizes(createTheme(styles), {}), []);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContext;

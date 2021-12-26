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
      default: '#160722',
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
    fontFamily: 'Roboto',
    allVariants: {
      color: '#ffffff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Roboto';
        font-weight: normal;
        src: url('/fonts/Roboto-Regular.otf');
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Roboto';
        font-weight: bold;
        src: url('/fonts/Roboto-Bold.otf');
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

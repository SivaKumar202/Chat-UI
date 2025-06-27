import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Change to 'dark' for dark mode
    primary: {
      main: '#2F80ED', // Modern blue
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#27AE60', // Green accent
    },
    error: {
      main: '#EB5757',
    },
    warning: {
      main: '#F2994A',
    },
    info: {
      main: '#56CC9D',
    },
    success: {
      main: '#36B37E',
    },
    background: {
      default: '#F5F7FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D3436', // Dark gray
      secondary: '#6C757D', // Muted gray
    },
    divider: '#E0E0E0',
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});
export default theme;

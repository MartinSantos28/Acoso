import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {

        main: '#242038', // Dark Purple
      light: '#788AA3', // Azul grisáceo
      dark: '#1A1A2E', // Darker Purple
    },
    secondary: {
      main: '#FFD72D', // Amarillo
      light: '#FFE566',
      dark: '#E6C200',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#242038', // Dark Purple
      secondary: '#788AA3', // Azul grisáceo
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(36, 32, 56, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 24px rgba(36, 32, 56, 0.08)',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme; 
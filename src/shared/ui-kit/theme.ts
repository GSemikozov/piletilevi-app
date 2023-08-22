import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0033',
    },
  },

  typography: {
    h4: {
      fontWeight: 700,
      '@media (max-width: 599.95px)': {
        fontSize: '1.125rem',
      },
    },
    h5: {
      fontWeight: 700,
      '@media (max-width: 599.95px)': {
        fontSize: '1.125rem',
      },
    },
    body1: {
      color: '#333',
      '@media (max-width: 599.95px)': {
        fontSize: '0.875rem',
      },
    },
    body2: {
      color: '#4A3991',
      fontWeight: 550,
      '@media (max-width: 599.95px)': {
        fontSize: '0.875rem',
      },
    },
  },
});

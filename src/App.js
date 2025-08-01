import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography, CssBaseline } from '@mui/material';

import './App.css';
import MenuSistema from './MenuSistema';
import Rotas from './Rotas';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const theme = createTheme({
  palette: {
    mode: 'dark', 
    primary: {
      main: '#280000',
    },
    secondary: {
      main: '#C7A34F',
    },
    background: {
      default: '#0A0A0A',
      paper: '#1a1a1a',
    },
  },
  typography: {
    fontFamily: '"Cinzel", serif',
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          
          <MenuSistema />
          
          <Rotas />
          
            <Box
            sx={{
              marginTop: '6%',
              backgroundColor: theme.palette.background.default,
              color: 'white',
              padding: '12px 0',
              textAlign: 'center',
              borderTop: '1px solid rgba(199, 163, 79, 0.1)'
            }}
          >
           
          </Box>

        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

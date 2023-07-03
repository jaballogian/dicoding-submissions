/* eslint linebreak-style: ["error", "windows"] */
// MUIS
import {
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';

// REACT
import React from 'react';
import ReactDOM from 'react-dom/client';

// CONSTANTS
import customTheme from './constants/theme';

// COMPONENTS
import App from './App';

// STYLES
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

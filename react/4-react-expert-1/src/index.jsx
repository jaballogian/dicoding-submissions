/* eslint linebreak-style: ["error", "windows"] */
// MUIS
import {
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';

// REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// REDUX
import { Provider } from 'react-redux';

// CONSTANTS
import customTheme from './constants/theme';

// COMPONENTS
import App from './App';

// STATES
import store from './states';

// STYLES
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <StyledEngineProvider injectFirst>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StyledEngineProvider>
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
);

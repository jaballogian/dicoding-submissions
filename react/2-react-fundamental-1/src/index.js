import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// COMPONENTS
import App from './App'

// CONSTANTS
import customTheme from 'constants/theme'

// MUIS
import { 
  StyledEngineProvider, 
  ThemeProvider, 
} from '@mui/material/styles'

// STYLES
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={customTheme}>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </StyledEngineProvider>
  </ThemeProvider>
)
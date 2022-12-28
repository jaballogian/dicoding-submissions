import React from 'react'
import ReactDOM from 'react-dom/client'

// COMPONENTS
import App from './App'

// MUIS
import { createTheme } from '@mui/material'
import { 
  StyledEngineProvider, 
  ThemeProvider, 
} from '@mui/material/styles'

// STYLES
import './index.css'

const customTheme = createTheme({
  typography: {
    fontFamily: [ 'Montserrat', 'sans-serif' ].join(','),
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={customTheme}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </ThemeProvider>
)
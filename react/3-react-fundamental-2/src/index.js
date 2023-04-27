import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// COMPONENTS
import App from './App'

// CONSTANTS
import customTheme from 'constants/theme'

// CONTEXTS
import { AppContextProvider } from 'contexts/AppContext'

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
      <AppContextProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </AppContextProvider>
    </StyledEngineProvider>
  </ThemeProvider>
)
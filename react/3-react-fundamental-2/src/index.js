import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// COMPONENTS
import App from './App'

// CONTEXTS
import { AppContextProvider } from 'contexts/AppContext'

// MUIS
import { 
  createTheme,
  StyledEngineProvider, 
  ThemeProvider, 
} from '@mui/material/styles'

// STYLES
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={createTheme({})}>
    <StyledEngineProvider injectFirst>
      <AppContextProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </AppContextProvider>
    </StyledEngineProvider>
  </ThemeProvider>
)
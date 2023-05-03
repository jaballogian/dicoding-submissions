import { createContext, useState, useEffect } from 'react'

// CONSTANTS
import { 
  paletteDark, 
  paletteLight, 
} from 'constants/colors'
import initialThemeObject from 'constants/theme'

// MUIS
import { 
  createTheme, 
  ThemeProvider,
} from '@mui/material/styles'

// UTILITIES
import { 
  readAccessTokenFromLocalStorage, 
  readThemeFromLocalStorage,
} from 'utilities/localStorage'

const AppContext = createContext()

const AppContextProvider = (props) => {
  const [ accessToken, setAccessToken ] = useState(() => readAccessTokenFromLocalStorage())
  const [ isLoading, setIsLoading ] = useState(false)
  const [ locale, setLocale ] = useState('id')
  const [ snackbar, setSnackbar ] = useState({
    open: false,
    severity: 'success',
    message: '',
  })
  const [ theme, setTheme ] = useState(() => readThemeFromLocalStorage())
  const [ themeObject, setThemeObject ] = useState(initialThemeObject)
  const [ user, setUser ] = useState(null)

  const isLightTheme = theme === 'light'

  useEffect(() => {
    setThemeObject(current => {
      return createTheme(current, {
        palette: {
          // mode: theme,
          text: isLightTheme ? paletteLight.text : paletteDark.text,
          divider: isLightTheme ? paletteLight.divider : paletteDark.divider,
          background: isLightTheme ? paletteLight.background : paletteDark.background,
        },
      })
    })
  }, [theme])

  return (
    <AppContext.Provider
      value={{
        accessToken, setAccessToken,
        isLoading, setIsLoading,
        locale, setLocale,
        snackbar, setSnackbar,
        theme, setTheme,
        user, setUser,
      }}
    >
      <ThemeProvider theme={themeObject}>
        {props.children}
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext }
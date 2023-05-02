import { createContext, useState } from 'react'

// UTILITIES
import { readAccessTokenFromLocalStorage } from 'utilities/localStorage'

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
  const [ theme, setTheme ] = useState('dark')
  const [ user, setUser ] = useState(null)

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
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext }
import { createContext, useState } from 'react'

// UTILITIES
import { readAccessTokenFromLocalStorage } from 'utilities/localStorage'

const AppContext = createContext()

const AppContextProvider = (props) => {
  const [ accessToken, setAccessToken ] = useState(() => readAccessTokenFromLocalStorage())
  const [ locale, setLocale ] = useState('id')
  const [ theme, setTheme ] = useState('dark')

  return (
    <AppContext.Provider
      value={{
        accessToken, setAccessToken,
        locale, setLocale,
        theme, setTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext }
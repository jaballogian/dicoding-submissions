import { createContext, useState } from 'react'

// UTILITIES
import { readUserFromLocalStorage } from 'utilities/localStorage'

const AppContext = createContext()

const AppContextProvider = (props) => {
  const [ user, setUser ] = useState(() => readUserFromLocalStorage())
  const [ locale, setLocale ] = useState('id')
  const [ theme, setTheme ] = useState('dark')

  return (
    <AppContext.Provider
      value={{
        user, setUser,
        locale, setLocale,
        theme, setTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext }